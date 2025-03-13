import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { states } from './states.js';

export const cities = sequelize.define(
    'cities', 
    {   
        fk_countries_cities: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            references:{
                model: states,
                key: 'fk_countries_states'
            }
        },
        fk_states_cities:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: states,
                key: 'id_states'
            }
        },
        id_states:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                min: 1,
                max: 9999999
            }
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull:false
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

// Definir la relación explícitamente
states.hasMany(cities, {
    foreignKey: ['fk_countries_states', 'fk_states_cities'],
    sourceKey: ['fk_countries_states', 'id_states'],
});

cities.belongsTo(states, {
    foreignKey: ['fk_countries_states', 'fk_states_cities'],
    targetKey: ['fk_countries_states', 'id_states'],
});