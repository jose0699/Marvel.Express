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
        last_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
    },
    {
        paranoid: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    }
);