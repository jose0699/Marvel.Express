import { sequelize } from "../../database/bd.js";
import { DataTypes } from "sequelize";
import { characters } from "./characters.js";
import { media } from "../media/media.js";
import { persons } from "../media/persons.js";

export const cast = sequelize.define('cast', {
        fk_media_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: media,
                key: 'id_media'
            }
        },
        fk_persons_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: persons,
                key: 'id_persons'
            }
        },
        fk_characters_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: characters,
                key: 'id_characters'
            }
        },
        type_role:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        type_actor:{
            type: DataTypes.CHAR(2),
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
