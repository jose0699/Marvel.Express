import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";
import { persons } from '../media/persons.js';
import { colors } from './colors.js';
import { powers } from './powers.js';
import { occupations } from './occupations.js';
import { objects } from './objects.js';

export const characters = sequelize.define('characters',
    {
        id_characters: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        first_surname: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        second_surname: {  
            type: DataTypes.STRING(128),
            allowNull: true
        },
        gender: {  
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        first_appearance: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stature: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phrase: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        marital_status: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        category: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        fk_persons: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: persons,
                key: 'id_persons'
            }
        },
        fk_colors_eyes: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: colors,
                key: 'id_color'
            }
        },
        fk_colors_hair: {  
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: colors,
                key: 'id_color'
            }
        }
    },
    {
        paranoid: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    }
);

persons.hasMany(characters, { foreignKey: 'fk_persons', sourceKey: 'id_persons' });
characters.belongsTo(persons, { foreignKey: 'fk_persons', targetKey: 'id_persons' });

colors.hasMany(characters, { foreignKey: 'fk_colors_eyes', sourceKey: 'id_color' });
characters.belongsTo(colors, { foreignKey: 'fk_colors_eyes', targetKey: 'id_color' });

colors.hasMany(characters, { foreignKey: 'fk_colors_hair', sourceKey: 'id_color' });
characters.belongsTo(colors, { foreignKey: 'fk_colors_hair', targetKey: 'id_color' });

characters.belongsToMany(colors, {through: "characters_colors"});
colors.belongsToMany(characters, {through: "characters_colors"});

characters.belongsToMany(powers, {through: "characters_powers"});
powers.belongsToMany(characters, {through: "characters_powers"});

characters.belongsToMany(occupations, {through: "characters_occupations"});
occupations.belongsToMany(characters, {through: "characters_occupations"});

characters.belongsToMany(objects, {through: "characters_objects"});
objects.belongsToMany(characters, {through: "characters_objects"});