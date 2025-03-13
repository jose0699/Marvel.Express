import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const countries = sequelize.define(
    'countries', 
    {
        id_countries:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            validate:{
                min: 1,
                max: 999
            }
        },
        name:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        nationality:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        continent:{
            type: DataTypes.CHAR(1),
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