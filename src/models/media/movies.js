import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

export const movies = sequelize.define(
    'movies', 
    {
        id_movies:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        duration:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        distributor:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        production_cost:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        revenue:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        category:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        fk_media_movies:{
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