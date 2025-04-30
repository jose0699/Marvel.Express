import { sequelize } from "../../database/bd.js";
import { DataTypes } from "sequelize";
import { media } from "../media/media.js";
import { users } from "./users.js";

export const criticism = sequelize.define( "criticism",{
        id_criticism:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_memberships_criticism:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: users,
                key: 'id_users'
            }
        },
        fk_media_criticism:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: media,
                key: 'id_media'
            }
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        description:{
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        reaction:{
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 7,
            },
        },
        fk_criticim:{
            type: DataTypes.INTEGER,
            allowNull: true,
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

criticism.hasMany(criticism, { as: 'replies', foreignKey: 'fk_criticism' });
criticism.belongsTo(criticism, { as: 'parent', foreignKey: 'fk_criticism'});
  