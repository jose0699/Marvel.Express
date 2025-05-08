import {sequelize} from '../../database/bd.js';
import { DataTypes } from 'sequelize';

export const genre = sequelize.define(
    'genre',
    {
        id_genre: {
            type: DataTypes.STRING(128),
            autoincrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false,
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