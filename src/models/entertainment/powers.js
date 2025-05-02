import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const powers = sequelize.define(
    'powers', 
    {
        id_powers:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        description: {
            type:DataTypes.STRING(256),
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