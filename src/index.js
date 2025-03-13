import {app} from './app.js';
import { sequelize } from './database/bd.js';
const port = 3000;

//Geography
    import './models/geography/countries.js';
    import './models/geography/states.js'
    import './models/geography/cities.js'

async function main(){
    try {
        await sequelize.sync({force: true});
        app.listen(port, ()=> {
            console.log(`Server is listening on port: ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();