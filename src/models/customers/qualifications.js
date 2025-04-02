import { sequelize } from '../../database/bd.js';
import { DataTypes } from 'sequelize';
import { memberships } from "./memberships.js";
import { media } from "../media/media.js";

export const qualifications = sequelize.define('qualifications', {
    fk_memberships_qualifications: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: memberships,
            key: 'id_memberships'
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
});
