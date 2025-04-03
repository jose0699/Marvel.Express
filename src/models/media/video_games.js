import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { media } from './media.js';

export const video_games = sequelize.define('video_games', {
        id_video_games:{
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        publisher:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        fk_media_video_games:{
            type: DataTypes.INTEGER(),
            allowNull: false,
            references:{
                model: media,
                key: 'id_media'
            }
        }
    },
    {
        paranoid: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    }
)

media.hasMany(video_games, {foreignKey:'fk_media_video_games', sourceKey:'id_media'});
video_games.belongsTo(media, {foreignKey:'fk_media_video_games', targetKey:'id_media'});