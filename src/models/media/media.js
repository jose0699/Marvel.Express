import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';

export const media = sequelize.define(
    'media', 
    {
        id_media: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tirtle:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        synopsis:{
            type: DataTypes.STRING(512),
            allowNull: false
        },
        company:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        premiere:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fk_persons_creator:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type:{
            /*SE= serie, MO= movie, VG= video_game*/ 
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        //movie
        duration:{
            type: DataTypes.FLOAT,
            allowNull: true
        },
        production_cost:{
            type: DataTypes.FLOAT,
            allowNull: true
        },
        revenue:{
            type: DataTypes.FLOAT,
            allowNull: true
        },
        //serie
        channel:{
            type: DataTypes.STRING(128),
            allowNull: true
        },
        chapter_total:{
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        //video_game

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