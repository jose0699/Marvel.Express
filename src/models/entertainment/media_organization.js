import {sequelize} from '../../database/bd.js';
import {DataTypes} from 'sequelize';
import { organization } from './organization.js';
import { media } from '../media/media.js';

export const media_organization = sequelize.define('media_organization', {
    fk_organization:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: organization,
            key: 'id_organization'
        }
    },
    fk_media:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: media,
            key: 'id_media'
        }
    },
    leadership:{
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    type:{
        type: DataTypes.STRING(500),
        allowNull: true
    }
});