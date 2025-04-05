import {verify_user_schema } from '../../middlewares/customers/users.js';
import { Router } from "express";
import users_methods from "../../controllers/customers/users.js";

const custom_router = Router();

custom_router.post('/Marvel/register',verify_user_schema,  users_methods.insert_users);
custom_router.post('/Marvel/login', users_methods.login_users);
custom_router.patch('/Marvel/recover_password');

export default custom_router;