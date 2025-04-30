import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/bd.js';
import { users } from './users.js';
import { media } from "../media/media.js";


export const qualifications = sequelize.define('qualifications', {
        fk_users_qualifications: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: users,
                key: 'id_users'
            }
        },
        fk_media_qualifications: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: media,
                key: 'id_media'
            }
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
