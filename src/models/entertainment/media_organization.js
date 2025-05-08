import {sequelize} from '../../database/bd.js';
import {DataTypes} from 'sequelize';

export const media_organization = sequelize.define(
    'media_organization', 
    {
        fk_organization:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fk_media:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        leadership:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        type:{
            type: DataTypes.STRING(500),
            allowNull: true
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