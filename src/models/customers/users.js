import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/bd.js';

export const users = sequelize.define(
    'users',
    {
        id_users:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true           
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
            // F: femenine M: masculine O: other
            type: DataTypes.CHAR(1),
            allowNull: false,
            defaultValue: 'O',
        },
        permission:{
            // 1: user, 2: moderator, 3: admin
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        countries_user:{
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