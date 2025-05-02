import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const headquarters = sequelize.define(
    'headquarters', 
    {
        id_headquarters:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        edification:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        origin:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        fk_organization_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_sectors_headquarters:{
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