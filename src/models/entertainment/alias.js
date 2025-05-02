import {sequelize} from '../../database/bd.js';
import { DataTypes} from 'sequelize';

export const alias = sequelize.define(
    'alias', 
    {
        id_characters_alias:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        uid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(50),
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

