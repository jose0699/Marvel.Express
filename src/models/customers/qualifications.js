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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
    }, 
    {
        paranoid: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
);