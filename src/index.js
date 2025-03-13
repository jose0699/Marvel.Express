import {app} from './app.js';
import { sequelize } from './database/bd.js';
const port = 3000;



async function main(){
    try {
        //Geography
        await import ('./models/geography/countries.js');
        await import ('./models/geography/states.js');
        await import ('./models/geography/cities.js');
        await import ('./models/geography/sectors.js');

        //customers
        await import ('./models/customers/users.js');
        await import ('./models/customers/memberships.js');

        await sequelize.sync({alter: true});
        app.listen(port, ()=> {
            console.log(`Server is listening on port: ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();