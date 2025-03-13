import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { video_games } from './video_games.js';

export const awars = sequelize.define('awars',
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
        fk_video_games_awars: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            references:{
                model: video_games,
                key: 'id_video_games'
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
);

video_games.hasMany(awars, {foreignKey:'fk_video_games_awars', sourceKey:'id_video_games'});
awars.belongsTo(video_games, {foreignKey:'fk_video_games_awars', targetKey:'id_video_games'});