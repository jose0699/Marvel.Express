import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

import { countries } from './countries.js'

export const states = sequelize.define(
    'states',
    {
        fk_countries_states:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: countries,
                key: 'id_countries'
            }
        },
        id_states:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                min: 1,
                max: 999999
            }
        },
        name:{
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
)

countries.hasMany(states, {
    foreignKey: 'fk_countries_states',
    sourceKey: 'id_countries',
  });
  
  states.belongsTo(countries, {
    foreignKey: 'fk_countries_states',
    targetKey: 'id_countries',
  });