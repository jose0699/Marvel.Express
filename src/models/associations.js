//geography
import {countries} from './geography/countries.js';
import {states} from './geography/states.js';
import {cities} from './geography/cities.js';
import {sectors} from './geography/sectors.js';

//media
import { media } from './media/media.js';
import { movies } from './media/movies.js';
import { series } from './media/series.js';
import { video_games } from './media/video_games.js';
import { awars } from './media/awars.js';
import { platforms } from './media/platforms.js';
import { persons } from './media/persons.js';

//customers
import { users } from './customers/users.js';
import { qualifications } from './customers/qualifications.js';
import { criticism } from './customers/criticism.js';

//entertainment
    import { alias } from './entertainment/alias.js';
    import { cast } from './entertainment/cast.js';
    import { characters } from './entertainment/characters.js';
    import { colors } from './entertainment/colors.js';
    import { headquarters } from './entertainment/headquarters.js';
    import { media_organization } from './entertainment/media_organization.js';
    import { objects } from './entertainment/objects.js';
    import { organization } from './entertainment/organization.js';
    import { occupations } from './entertainment/occupations.js';
    import { powers } from './entertainment/powers.js';
    import { relationship } from './entertainment/relationship.js';
    import { roles } from './entertainment/roles.js';

//--------------------------------------------------------------------------------------------
//geography
    //states
    countries.hasMany(states, { foreignKey: 'fk_countries_states', sourceKey: 'id_countries', });
    states.belongsTo(countries, { foreignKey: 'fk_countries_states', targetKey: 'id_countries',});

    //cities
    states.hasMany(cities, { foreignKey: 'fk_states_cities', sourceKey: 'id_states',});
    cities.belongsTo( states, { foreignKey: 'fk_states_cities', targetKey: 'id_states'});

    //sectors
    cities.hasMany(sectors, { foreignKey: 'fk_cities_sector', sourceKey: 'id_cities' });
    sectors.belongsTo(cities,{ foreignKey: 'fk_cities_sector', targetKey: 'id_cities'});

//--------------------------------------------------------------------------------------------
//media
    //video games
    video_games.hasMany(awars, {foreignKey:'fk_video_games_awars', sourceKey:'id_video_games'});
    awars.belongsTo(video_games, {foreignKey:'fk_video_games_awars', targetKey:'id_video_games'});

    //media
    media.belongsTo(persons, { foreignKey: 'fk_persons_media', targetKey: 'id_persons' });
    persons.hasMany(media, { foreignKey: 'fk_persons_media', sourceKey: 'id_persons' });
    media.belongsToMany(countries, { through: "censorship" });
    countries.belongsToMany(media, { through: "censorship" });

    //movies
    media.hasMany(movies, {foreignKey:'fk_media_movies', sourceKey:'id_media'});
    movies.belongsTo(media, {foreignKey:'fk_media_movies', targetKey:'id_media'});

    //platforms
    media.belongsToMany(platforms, { through: "media_platforms" });
    platforms.belongsToMany(media, { through: "media_platforms" });

    //series
    media.hasMany(series, {foreignKey:'fk_media_series', sourceKey:'id_media'});
    series.belongsTo(media, {foreignKey:'fk_media_series', targetKey:'id_media'});

    //video games
    media.hasMany(video_games, {foreignKey:'fk_media_video_games', sourceKey:'id_media'});
    video_games.belongsTo(media, {foreignKey:'fk_media_video_games', targetKey:'id_media'});
//--------------------------------------------------------------------------------------------
//customers
    //users
    countries.hasMany(users, { foreignKey: 'countries_user', sourceKey: 'id_countries' });
    users.belongsTo(countries, { foreignKey: 'countries_user', targetKey: 'id_countries' });

    //qualifications
    users.hasMany(qualifications, { foreignKey: 'fk_users_qualifications', sourceKey: 'id_users' });
    qualifications.belongsTo(users, { foreignKey: 'fk_users_qualifications', targetKey: 'id_users' });

    //criticism
    users.hasMany(criticism, { foreignKey: 'fk_memberships_criticism', sourceKey: 'id_users' });
    media.hasMany(criticism, { foreignKey: 'fk_media_criticism', sourceKey: 'id_media' });
    criticism.belongsTo(media, { foreignKey: 'fk_media_criticism', targetKey: 'id_media' });
    criticism.belongsTo(users, { foreignKey: 'fk_memberships_criticism', targetKey: 'id_users' });
    criticism.hasMany(criticism, { as: 'replies', foreignKey: 'fk_criticism' });
    criticism.belongsTo(criticism, { as: 'parent', foreignKey: 'fk_criticism'});


//--------------------------------------------------------------------------------------------
//entertainment
    //alias
    characters.hasMany(alias, { foreignKey: 'id_characters_alias', sourceKey: 'id_characters' });
    alias.belongsTo(characters, { foreignKey: 'id_characters_alias', targetKey: 'id_characters' });

    //cast
    media.hasMany(cast, { foreignKey: 'fk_media_cast', sourceKey: 'id_media' });
    characters.hasMany(cast, { foreignKey: 'fk_characters_cast', sourceKey: 'id_characters' });
    persons.hasMany(cast, { foreignKey: 'fk_persons_cast', sourceKey: 'id_persons' });
    cast.belongsTo(media, { foreignKey: 'fk_media_cast', targetKey: 'id_media' });
    cast.belongsTo(characters, { foreignKey: 'fk_characters_cast', targetKey: 'id_characters' });
    cast.belongsTo(persons, { foreignKey: 'fk_persons_cast', targetKey: 'id_persons' });

    //characters
    persons.hasMany(characters, { foreignKey: 'fk_persons', sourceKey: 'id_persons' });
    characters.belongsTo(persons, { foreignKey: 'fk_persons', targetKey: 'id_persons' });
    colors.hasMany(characters, { foreignKey: 'fk_colors_eyes', sourceKey: 'id_color' });
    characters.belongsTo(colors, { foreignKey: 'fk_colors_eyes', targetKey: 'id_color' });
    colors.hasMany(characters, { foreignKey: 'fk_colors_hair', sourceKey: 'id_color' });
    characters.belongsTo(colors, { foreignKey: 'fk_colors_hair', targetKey: 'id_color' });
    characters.belongsToMany(occupations, {through: "characters_occupations"});
    occupations.belongsToMany(characters, {through: "characters_occupations"});
    characters.belongsToMany(colors, {through: "characters_colors"});
    colors.belongsToMany(characters, {through: "characters_colors"});
    characters.belongsToMany(powers, {through: "characters_powers"});
    powers.belongsToMany(characters, {through: "characters_powers"});
    characters.belongsToMany(objects, {through: "characters_objects"});
    objects.belongsToMany(characters, {through: "characters_objects"});

    //headquarters
    organization.hasMany(headquarters, {foreignKey:'fk_organization_headquarters', sourceKey:'id_organization'});
    sectors.hasMany(headquarters, {foreignKey:'fk_sectors_headquarters', sourceKey:'id_sector'});
    headquarters.belongsTo(organization, {foreignKey:'fk_organization_headquarters', targetKey:'id_organization'});
    headquarters.belongsTo(sectors, {foreignKey:'fk_sectors_headquarters', targetKey:'id_sector'});

    //media_organization
    organization.hasMany(media_organization, { foreignKey: 'fk_organization', sourceKey: 'id_organization' });
    media_organization.belongsTo(organization, { foreignKey: 'fk_organization', targetKey: 'id_organization' });
    media.hasMany(media_organization, { foreignKey: 'fk_media', sourceKey: 'id_media' });
    media_organization.belongsTo(media, { foreignKey: 'fk_media', targetKey: 'id_media' });

    //relationship
    relationship.belongsTo(characters, { 
        foreignKey: 'id_characters_relationship_one',
        targetKey: 'id_characters',
        as: 'character_one'
    });
    relationship.belongsTo(characters, {
        foreignKey: 'id_characters_relationship_two',
        targetKey: 'id_characters',
        as: 'character_two'
    });
    characters.hasMany(relationship, {
        foreignKey: 'id_characters_relationship_one',
        sourceKey: 'id_characters',
        as: 'relationships_one'
    });
    characters.hasMany(relationship, {
        foreignKey: 'id_characters_relationship_two',
        sourceKey: 'id_characters',
        as: 'relationships_two'
    });

    //roles
    headquarters.hasMany(roles, {foreignKey: 'fk_headquarters_roles', sourceKey: 'id_headquarters'});
    roles.belongsTo(headquarters, {foreignKey: 'fk_headquarters_roles', targetKey: 'id_headquarters'});
    characters.hasMany(roles, {foreignKey: 'fk_characters_roles', sourceKey: 'id_characters'});
    roles.belongsTo(characters, {foreignKey: 'fk_characters_roles', targetKey: 'id_characters'});
