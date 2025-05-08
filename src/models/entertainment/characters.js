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
            // f: femine, m: masculine, o: other
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
        category: {
            // S: Superhero, V: Villain, A: Antihero, C: civil
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
        },status:{
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