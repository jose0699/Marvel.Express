import { sequelize } from '../../database/bd.js';
import { DataTypes } from 'sequelize';

export const chronology = sequelize.define(
    {   
        uid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_media_one:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_media_two:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        type:{
            type: DataTypes.CHAR(2),
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