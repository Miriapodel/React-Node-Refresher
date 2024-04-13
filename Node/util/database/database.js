import { Sequelize } from "sequelize";
import env from "dotenv";

env.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST
});

export default sequelize;
