import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";
import { headquarters } from "./headquarters.js";
import { characters } from "./characters.js";

export const roles = sequelize.define('roles', {
        id_roles:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position:{
            type: DataTypes.STRING(256),
            allowNull: false
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: true
        },
        fk_headquarters_roles:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: headquarters,
                key: 'id_headquarters'
            }
        },
        fk_characters_roles:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: characters,
                key: 'id_characters'
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

headquarters.hasMany(roles, {foreignKey: 'fk_headquarters_roles', sourceKey: 'id_headquarters'});
roles.belongsTo(headquarters, {foreignKey: 'fk_headquarters_roles', targetKey: 'id_headquarters'});


characters.hasMany(roles, {foreignKey: 'fk_characters_roles', sourceKey: 'id_characters'});
roles.belongsTo(characters, {foreignKey: 'fk_characters_roles', targetKey: 'id_characters'});

