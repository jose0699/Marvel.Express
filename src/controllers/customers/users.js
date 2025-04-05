import { users } from '../../models/customers/users.js';
    
export class users_methods {
    async insert_users (req, res){  
        try{
            const  {
                users_name, email, password, first_name,
                last_name, birthdate, gender, countries_user
            } = req.body;
    
            const new_user = await users.create({
                users_name, email, password, first_name, 
                last_name, birthdate, gender, countries_user
            });
            res.status(201).json(new_user);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async login_users (req, res){
        try{
            const { users_name, password } = req.body;

            if (!users_name || !password) {
                return res.status(400).json({ message: 'Both username and password are required' });
            }

            const user = await users.findOne(
                { where: { users_name, password },
                attributes: ["id_users", "first_name", "last_name"]
            });
            
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }
};

export default new users_methods;