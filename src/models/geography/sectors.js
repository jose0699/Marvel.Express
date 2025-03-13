import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { cities } from './cities.js'

export const sectors = sequelize.define(
    'sectors', 
    {   
        id_sector:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                min: 1, 
                max: 99999999
            }
        },
        fk_cities_sector:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
                model: cities,
                key: 'id_cities'
            }
        },
        name: {
            type: DataTypes.STRING(256),
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

cities.hasMany(sectors, 
    {
        foreignKey: 'fk_cities_sector',
        sourceKey: 'id_cities'
    }
)

sectors.belongsTo(cities,
    {
        foreignKey: 'fk_cities_sector',
        targetKey: 'id_cities'
    }
)