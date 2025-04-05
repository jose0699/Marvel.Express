import { sequelize } from './database/bd.js';
import { app } from './app.js';


const port = 3000;

try {
    //Geography
        await import ('./models/geography/countries.js');
        await import ('./models/geography/states.js');
        await import ('./models/geography/cities.js');
        await import ('./models/geography/sectors.js');

        
    //media
        await import ('./models/media/persons.js');
        await import ('./models/media/media.js');
        await import ('./models/media/movies.js');
        await import ('./models/media/series.js');
        await import ('./models/media/video_games.js');
        await import ('./models/media/awars.js');
        await import ('./models/media/platforms.js');
        
    //customers
        await import ('./models/customers/users.js');
        await import ('./models/customers/memberships.js');
        await import ('./models/customers/qualifications.js');
        await import ('./models/customers/criticism.js');
        await import ('./models/customers/answers.js');
        
    //entertainment
        await import ('./models/entertainment/colors.js');
        await import ('./models/entertainment/powers.js');
        await import ('./models/entertainment/occupations.js');
        await import ('./models/entertainment/objects.js');
        await import ('./models/entertainment/organization.js')
        await import ('./models/entertainment/headquarters.js');
        await import ('./models/entertainment/characters.js');
        await import ('./models/entertainment/roles.js');
        await import ('./models/entertainment/media_organization.js');
        await import ('./models/entertainment/cast.js');
        await import ('./models/entertainment/alias.js');
        await import ('./models/entertainment/relationship.js');
        
        await sequelize.sync({alter: false});
    app.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
    });
} catch (error) {
    console.log(error);
}