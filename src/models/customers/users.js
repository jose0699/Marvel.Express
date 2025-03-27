import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/bd.js';
import { countries } from '../geography/countries.js';

export const users = sequelize.define('users',
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
            unique: true,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(256),
            allowNull: false,
            valida: {
                isEmail: true,
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: false
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
        },
        birthdate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        gender:{
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        countries_user:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: countries,
                key: 'id_countries'
            }
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

countries.hasMany(users,
    {
        foreignKey: 'countries_user',
        sourceKey: 'id_countries'
    }
);

users.belongsTo(countries,
    {
        foreignKey: 'countries_user',
        targetKey: 'id_countries'
    }
);
