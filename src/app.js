import express from 'express';
import users_routers from './routes/customers/users.js'; 
export const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Custom Router: Customers
    app.use(users_routers); 

