import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const sectors = sequelize.define( 
    'sectors', 
    {
        id_sector:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                min: 1, 
                max: 99999999
            }
        },
        fk_cities_sector:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
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