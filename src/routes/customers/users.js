import { Router } from "express";
import { verify_user_schema }  from '../../middlewares/customers/users.js';
import users_methods from "../../controllers/customers/users.js";
import Token from "../../services/jwt.js";

const custom_router = Router();

custom_router.get('/marvel/profile', Token.valide_token, users_methods.get_users);
custom_router.post('/marvel/register', verify_user_schema ,  users_methods.insert_users);
custom_router.post('/marvel/login', users_methods.login_users);
custom_router.patch('/marvel/update', Token.valide_token, users_methods.update_users);
custom_router.patch('/marvel/update_password', Token.valide_token, users_methods.update_password);

export default custom_router;