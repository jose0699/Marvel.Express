import { users } from '../../models/customers/users.js';
import { countries } from '../../models/geography/countries.js';
import bcrypt from 'bcrypt';
import Token from '../../services/jwt.js'
const saltRounds = 12;  

async function hash_password(password) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw new Error('Error hashing password: ' + error.message);
    }
}

async function compare_password(password, hash) {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (error) {
        throw new Error('Error comparing password: ' + error.message);
    }
} 

export class users_methods {
    async get_users(req, res){
        try{
            const id = req.user.id; 
            const data = await users.findOne({
                where: { id_users: id },
                attributes: ["users_name", "email", "first_name", "last_name", "birthdate"],
                include: [{
                    model: countries,
                    attributes: ["nationality"]
                }]
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: 'Internal Server Error (' + error.message + ')'});
        }
    }

    async update_password(req, res) {
        try {
            const { old_password, password } = req.body;

            const hash = await users.findOne(
                {where: { id_users: req.user.id }},
                { attributes: ["password"] }
            );

            const isMatch = await compare_password(old_password, hash.password);
    
            if (!isMatch) {
                return res.status(400).json({ message: 'Old password is incorrect' });
            }
    
            const hashedPassword = await hash_password(password);
    
            const [updatedRows] = await users.update(
                { password: hashedPassword },
                { where: { id_users: req.user.id } }
            );
    
            if (updatedRows === 0) {
                return res.status(400).json({ message: 'Password update failed' });
            }
    
            return res.status(200).json({ message: 'Password updated successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error (' + error.message + ')' });
        }
    }
    

    async insert_users (req, res){  
        try{
            var  {
                users_name, email, password, first_name,
                last_name, birthdate, gender, countries_user
            } = req.body;
            
            password = await hash_password(password);

            const data = await users.create({
                users_name, email, password, first_name, 
                last_name, birthdate, gender, countries_user
            });

            res.status(201).json(data);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error(' + error.message +')'});
        }
    };

    async update_users (req, res){
        try{

            const id= req.user.id;
            const { first_name, last_name, birthdate, gender, countries} = req.body;

            const update_user = await users.update(
                { first_name, last_name, birthdate, gender, countries_user: countries },
                {where: { id_users: id }}
            );

            res.status(200).json({
                message: 'User updated successfully'
            });
        }catch (error) {
            
            return res.status(500).json({message: 'Internal Server Error' + error.message +') '});
        }
    }
    async login_users (req, res){
        try{
            const { users_name, password } = req.body;

            if (!users_name || !password) {
                return res.status(400).json({ message: 'Both username and password are required' });
            }

            const data = await users.findOne(
                { where: { users_name},
                attributes: ["id_users", "password","first_name", "last_name"]
            });
           
            if (!data) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const isMatch = await compare_password(password, data.password);

            if(!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            let access_token = await Token.generate_token(data.id_users, users_name);

            res.status(200).header('authorization', access_token).json({
                id_users: data.id_users,
                first_name: data.first_name,
                last_name: data.last_name,
                message: 'Login successful',
                access_token: access_token
            });
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error (' + error.message + ')'});
        }
    }
};

export default new users_methods;