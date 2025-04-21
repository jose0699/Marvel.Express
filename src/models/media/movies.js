import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";
import { media } from "./media.js";

export const movies = sequelize.define('movies', {
        id_movies:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        duration:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        distributor:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        production_cost:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        revenue:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        category:{
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        fk_media_movies:{
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

media.hasMany(movies, {foreignKey:'fk_media_movies', sourceKey:'id_media'});
movies.belongsTo(media, {foreignKey:'fk_media_movies', targetKey:'id_media'});