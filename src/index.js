import {app} from './app.js';
import { sequelize } from './database/bd.js';
const port = 3000;

async function main(){
    try {
        await sequelize.sync({});
        app.listen(port, ()=> {
            console.log(`Server is listening on port: ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();