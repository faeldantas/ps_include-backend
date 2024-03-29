import multer from 'multer';
import Post from '../models/Post.js'
import Foto from '../models/Foto.js';


import multerConfig from '../config/multerConfig.js';

const upload = multer(multerConfig).single('foto')


class PhotoController {
	store(req, res) {
		return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { post_id } = req.body;
        const foto = await Foto.create({ originalname, filename, post_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: [e.code, e.message],
        });
      }
    });
  }

	update(req, res) {
		return upload(req, res, async (err) => {
			if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
			}
			try {
				const { id } = req.params;

				if (!id) {
					return res.status(404).json({ errors: ['id not provided'] });
				}

				// Encontre o post pelo ID
				const post = await Post.findByPk(id);

				if (!post) {
					return res.status(404).json({ errors: ['Post not found'] });
				}
				// Encontre a foto associada ao post
				const foto = await Foto.findOne({
					where: {
						post_id: id // Filtra pelo ID do post
					}
				});
				// Se não houver foto associada ao post
				if (!foto) {
					return res.status(404).json({ errors: ['No photo found for this post'] });
				}

				const { originalname, filename } = req.file;
				// Atualize os dados da foto
				
				const fotoAtualizada = await foto.update({ originalname, filename });

				return res.json(fotoAtualizada);
			} catch (e) {
				return res.json({
					errors: [e.message],
				});
			}
  	});
	}

	async delete(req, res) {
		return res.json("ok")
	}

}

export default new PhotoController();