import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const awars = sequelize.define(
    'awars', 
    {
        id_awars:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type:DataTypes.STRING(256),
            allowNull: false
        },
        description: {
            type:DataTypes.STRING(256),
            allowNull: false
        },
        fk_media_awars: {
            type: DataTypes.INTEGER(),
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