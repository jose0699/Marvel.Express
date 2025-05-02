import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/bd.js';

export const users = sequelize.define(
    'users',
    {
        id_users:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                min: 1,
                max: 999999
            },            
        },
        users_name:{
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true
        },
        email:{
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true,
            valida: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        first_name: {  
            type: DataTypes.STRING(128),
            allowNull: false
        },
        last_name: {  
            type: DataTypes.STRING(128),
            allowNull: true
        },
        birthdate:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        gender:{
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        permission:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate:{
                min: 1,
                max: 3
            }
        },
        countries_user:{
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