import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/bd.js';

export const qualifications = sequelize.define(
    'qualifications', 
    {
        fk_users_qualifications: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fk_media_qualifications: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        punctuation: {
            // validate 1 - 5
            type: DataTypes.INTEGER,
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