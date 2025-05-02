import { sequelize } from "../../database/bd.js";
import { DataTypes } from "sequelize";

export const criticism = sequelize.define( 
    "criticism",
    {
        id_criticism:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_memberships_criticism:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fk_media_criticism:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        description:{
            type: DataTypes.STRING(512),
            allowNull: false
        },
        reaction:{
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 7,
            }
        },
        fk_criticim:{
            type: DataTypes.INTEGER,
            allowNull: true,
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