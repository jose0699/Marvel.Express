import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const colors = sequelize.define('colors',
    {
        id_color:{
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