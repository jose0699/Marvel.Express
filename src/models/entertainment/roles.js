import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

export const roles = sequelize.define(
    'roles', 
    {
        id_roles:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: true
        },
        fk_headquarters_roles:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_characters_roles:{
            type: DataTypes.INTEGER,
            allowNull: false
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