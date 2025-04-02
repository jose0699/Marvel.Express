import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { persons } from './persons.js';
import { countries } from '../geography/countries.js';

export const media = sequelize.define('media', 
    {
        id_media: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        premiere:{
            type: DataTypes.DATE,
            allowNull: false
        },
        company:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        tirtle:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        synopsis:{
            type: DataTypes.STRING(512),
            allowNull: false
        },
        category:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        saga:{
            type: DataTypes.STRING(256),
            allowNull: true
        },
        fk_persons_media:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: persons,
                key: 'id_persons'
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

persons.hasMany(media,{ foreignKey: 'fk_persons_media', sourceKey: 'id_persons'});
media.belongsTo(persons, {foreignKey: 'fk_persons_media', targetKey: 'id_persons'});

media.belongsToMany(countries, { through: "censorship" });
countries.belongsToMany(media, { through: "censorship" });