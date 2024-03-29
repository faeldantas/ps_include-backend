import multer from 'multer';
import path, { extname, resolve} from 'path';

const __dirname = path.resolve();

export default {
	fileFilter: (req, file, cb) => {
    if (file.mimetytpe !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser JPG ou JPEG'));
    }

    return cb(null, true);
  },
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, resolve(__dirname, 'uploads', 'pictures'));
		},
		filename: (req, file, cb) => {
			cb(null, `${Date.now()}${extname(file.originalname)}`);
			console.log(__dirname);
		},
	}),
}