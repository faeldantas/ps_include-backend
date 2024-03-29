
import dotenv from 'dotenv';
dotenv.config();
// Arquivo com configurações do banco de dados
const config = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timeZone: 'America/Sao_Paulo',
  },
  timeZone: 'America/Sao_Paulo',
};

export default config;
