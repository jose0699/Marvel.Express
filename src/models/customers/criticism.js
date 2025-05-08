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
        fk_users_criticism:{
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
            allowNull: false,
            defaultValue: null
        },
        reaction:{
            // 1: like, 2: dislike, 3: love, 4: hate, 5: funny, 6: sad, 7: angry
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        fk_criticim:{
            type: DataTypes.INTEGER,
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