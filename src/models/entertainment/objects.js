import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const objects = sequelize.define('objects', {
        id_objects : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        objects:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        category: {
            type: DataTypes.CHAR(3),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(512),
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
)