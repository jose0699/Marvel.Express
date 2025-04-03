import {sequelize} from '../../database/bd.js';
import { DataTypes} from 'sequelize';
import { characters } from "./characters.js";

export const relationship = sequelize.define('relationship', {
        id_characters_relationship_one:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: characters,
                key: 'id_characters'
            }
        },
        id_characters_relationship_two:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: characters,
                key: 'id_characters'
            }
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