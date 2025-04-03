import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js'

export const persons = sequelize.define('persons', {
        id_persons: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        first_surname: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        second_surname: {  
            type: DataTypes.STRING(128),
            allowNull: true
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