import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

class Token {
    async generate_token(uid, user) {
        try {
            const secretKey = process.env.SECRET;

            if (!secretKey) {
                throw new Error('Secret key is not defined in environment variables');
            }

            return jwt.sign(
                { id: uid, name: user },
                secretKey,                          
                { expiresIn: '1h' }  
            );
        } catch (error) {
            throw new Error('Error generating access token: ' + error.message);
        }
    }

    async valide_token(req, res, next) {
        try{
            const access_token = req.headers['authorization']?.split(' ')[1];
            const secretKey = process.env.SECRET;

            if(!secretKey){
                return res.status(401).json({ message: 'Secret key is not defined in environment variables' });
            }
            const decoded = jwt.verify(access_token, secretKey);
            
            if (!decoded) {
                return res.status(401).json({ message: 'Invalid access token' });
            }
            req.user = decoded;
            return next();
        } catch (error) {

            if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Invalid or expired token (' + error.message + '). ' + req.headers });
            }

            return res.status(500).json({ message: 'Internal Server Error(' + error +')' });
        }

    }
}

export default new Token();
