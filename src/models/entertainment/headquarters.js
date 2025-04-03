import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { organization } from './organization.js';
import { sectors } from '../geography/sectors.js';

export const headquarters = sequelize.define('headquarters', {
        id_headquarters:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        edification:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        origin:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        fk_organization_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: organization,
                key: 'id_organization'
            }
        },
        fk_sectors_headquarters:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: sectors,
                key: 'id_sector'
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

organization.hasMany(headquarters, {foreignKey:'fk_organization_headquarters', sourceKey:'id_organization'});
headquarters.belongsTo(organization, {foreignKey:'fk_organization_headquarters', targetKey:'id_organization'});

sectors.hasMany(headquarters, {foreignKey:'fk_sectors_headquarters', sourceKey:'id_sector'});
headquarters.belongsTo(sectors, {foreignKey:'fk_sectors_headquarters', targetKey:'id_sector'});