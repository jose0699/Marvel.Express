import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const objects = sequelize.define(
    'objects', 
    {
        id_objects : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        objects:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        category: {
            /*
                WE: weapon
                TE: technology
                MA: magical
                CO: cosmic
                VE: Vehicles
                SS: special suit
            */ 
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(512),
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