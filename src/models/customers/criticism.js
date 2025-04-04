import { sequelize } from "../../database/bd.js";
import { DataTypes } from "sequelize";
import { memberships } from "./memberships.js";
import { media } from "../media/media.js";

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
                model: memberships,
                key: 'id_memberships'
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
        status:{
            type: DataTypes.STRING(512),
            allowNull: false,
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