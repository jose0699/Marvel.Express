import {sequelize} from '../../database/bd.js';
import { DataTypes} from 'sequelize';

export const relationship = sequelize.define(
    'relationship', 
    {
        id_characters_relationship_one:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_characters_relationship_two:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        status:{
            type: DataTypes.CHAR(1),
            allowNull: false
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