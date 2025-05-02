import {sequelize} from '../../database/bd.js';
import { DataTypes } from 'sequelize';

export const series = sequelize.define(
    'series', 
    {
        id_series:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        publisher:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        channel:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        chapter_total:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_media_series:{
            type: DataTypes.INTEGER,
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