import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

export const organization = sequelize.define(
    'organization', 
    {
        id_organization:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        slogan:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        category:{
            /*
                CO: Company
                ST: State
                CR: Criminal
                PR: Private
                GO: Government
                NG: Non-Governmental
                IN: International
            */
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        objetive:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        appearance:{
            type: DataTypes.DATEONLY,
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