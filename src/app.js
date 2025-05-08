import express from 'express';
import users_routers from './routes/customers/users.js'; 
//import media_routers from './routes/media/media.js';
export const app = express();

// Middlewares
app.use(express.urlencoded({ limit: '15mb' ,extended: true }));
app.use(express.json({ limit: '15mb'}));

// Custom Router: Customers
    app.use(users_routers); 

// Custom Router: Media
    //app.use(media_routers);

