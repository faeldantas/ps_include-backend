import './src/database/index.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

import express from 'express';
import cors from 'cors';
import photoRoutes from './src/routes/photoRoutes.js';
import postsRoutes from './src/routes/postRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
		this.exibir();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
		this.app.use('/photo/', photoRoutes);
		this.app.use('/post/', postsRoutes);
  }
	exibir() {
		console.log(__dirname);
	}
}

export default new App().app;
