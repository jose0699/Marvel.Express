import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'marvel.express',
    'postgres',
    'jose0699',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);