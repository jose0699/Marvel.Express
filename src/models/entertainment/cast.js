import { sequelize } from "../../database/bd.js";
import { DataTypes } from "sequelize";

export const cast = sequelize.define(
    'cast', 
    {
        fk_media_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fk_persons_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fk_characters_cast:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type_role:{
            type: DataTypes.CHAR(2),
            allowNull: true, 
            defaultValue: null
        },
        type_actor:{
            type: DataTypes.CHAR(2),
            allowNull: true,
            defaultValue: null
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