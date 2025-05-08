import { DataTypes } from "sequelize";
import { sequelize } from "../../database/bd.js";

export const states = sequelize.define( 
    'states', 
    {
        id_states:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                min: 1,
                max: 999999
            }
        },
        fk_countries_states:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(256),
            allowNull:false
        },
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