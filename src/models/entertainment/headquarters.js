import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const headquarters = sequelize.define(
    'headquarters', 
    {
        fk_organization_headquarters:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
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
            /*  
              SFH:  Single-family home 
              TFH: Two-family home 
              LB: low building
              MB: Medium building 
              HD: height difficulty 
              SK: skyscraper 
            */
            type: DataTypes.CHAR(3),
            allowNull: false
        },
        origin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        fk_sectors_countries_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_sectors_states_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_sectors_cities_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_sectors_id_headquarters:{
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