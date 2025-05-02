import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const video_games = sequelize.define(
    'video_games', 
    {
        id_video_games:{
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        publisher:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        fk_media_video_games:{
            type: DataTypes.INTEGER(),
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