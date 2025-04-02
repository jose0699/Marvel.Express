import {sequelize} from '../../database/bd.js';
import {DataTypes} from 'sequelize';
import {criticism} from './criticism.js';
import {users} from './users.js';

export const Answers = sequelize.define('answers', {
    id_answers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fk_criticism_answers:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: criticism,
            key: 'id_criticism'
        }
    },
    fk_users_answers:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: users,
            key: 'id_users'
        }
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(500),
        allowNull: true
    },
    reaction:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
});