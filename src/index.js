import { sequelize } from './database/bd.js';
import { app } from './app.js';

const port = 3000;

try {
    //Associations
        await import ('./models/associations.js');    
        await sequelize.sync({force: true, alter: false});

    app.listen(port, ()=> {
        console.log(`Server is listening on port: ${port}`);
    });
} catch (error) {
    console.log(error.message);
}