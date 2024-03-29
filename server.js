import app from './app.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Converta a URL do módulo para o caminho do arquivo
const __filename = fileURLToPath(import.meta.url);
// Obtenha o diretório pai do arquivo atual
const __dirname = dirname(__filename);


const port = 4000;

app.listen(port, () => {
  console.log();
  console.log(`listening on port ${port}`);
  console.log(`CTRL + clique em http://localhost:${port}`);
	console.log(__dirname);
});
