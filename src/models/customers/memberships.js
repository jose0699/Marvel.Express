import { DataTypes, INTEGER } from 'sequelize'
import {sequelize} from '../../database/bd.js'
import {users} from './users.js'

export const memberships = sequelize.define('memberships',
    {
        id_memberships:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }, 
        end_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        fk_users_memberships:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: users,
                key: 'id_users'
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
)

users.hasMany(memberships, 
    {
        foreignKey: 'fk_users_memberships',
        sourceKey: 'id_users'
    }
);

memberships.belongsTo(users, 
    {
        foreignKey: 'fk_users_memberships',
        targetKey: 'id_users'
    }
);