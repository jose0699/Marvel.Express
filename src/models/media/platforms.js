import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const platforms = sequelize.define(
    'platforms', 
    {
        id_platforms:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type:DataTypes.STRING(256),
            allowNull: false
        }, 
        status:{
            type:DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: true
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