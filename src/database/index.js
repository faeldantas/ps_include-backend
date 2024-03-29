import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Post from '../models/Post.js';
import Foto from '../models/Foto.js';

const models = [Post, Foto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
