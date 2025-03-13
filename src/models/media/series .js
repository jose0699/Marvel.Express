import { DataTypes } from 'sequelize';
import {sequelize} from '../../database/bd.js';
import { media } from './media.js';

export const series = sequelize.define('series',
    {
        id_series:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        publisher:{
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        channel:{
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        chapter_total:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_media_series:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: media,
                key: 'id_media'
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

media.hasMany(series, {foreignKey:'fk_media_series', sourceKey:'id_media'});
series.belongsTo(media, {foreignKey:'fk_media_series', targetKey:'id_media'});