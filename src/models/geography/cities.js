import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const cities = sequelize.define( 
    'cities', 
    {   
        id_cities:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                min: 1,
                max: 9999999
            }
        },
        fk_states_cities:{
            type: DataTypes.INTEGER,
            allowNull:false
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



