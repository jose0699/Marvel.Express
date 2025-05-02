import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

export const characters = sequelize.define(
    'characters',
    {
        id_characters: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        last_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        gender: {  
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        first_appearance: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stature: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phrase: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        marital_status: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        category: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        fk_persons: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_colors_eyes: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_colors_hair: {  
            type: DataTypes.INTEGER,
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