import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { media } from './media.js';

export const platforms = sequelize.define('platforms', {
        id_platforms:{
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

media.belongsToMany(platforms, { through: "media_platforms" });
platforms.belongsToMany(media, { through: "media_platforms" });