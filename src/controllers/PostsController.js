import Post from '../models/Post.js';
import Foto from '../models/Foto.js';

class PostsController {
	async create(req, res) {
		try {
			console.log(req.body);
			const post = await Post.create(req.body);
			res.json(post);
		} catch (e) {
			return res.json({
				errors: e.errors.map((err) => err.message),
			});
		}
	}

	async read(req, res) {
		try {
			const { id } = req.params;

      if (!id) {
        return res.status(404).json({ errors: ['id not provided'] });
      }

      const post = await Post.findByPk(id, {
				attributes: ['id', 'title', 'description'],
				order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
				include: {
					model: Foto,
					attributes: ['url', 'originalname', 'filename'],
				},
			});

      if (!post) {
        return res.status(404).json({ errors: ['post not find'] });
      }



      return res.json(post);
		} catch (e) {
			return res.json({
				errors: [e.message],
			});
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params;

      if (!id) {
        return res.status(404).json({ errors: ['id not provided'] });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ errors: ['Post not find'] });
      }

      const postAtualizado = await post.update(req.body);

      return res.json(postAtualizado);
		} catch (e) {
			return res.json({
				errors: [e.message],
			});
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;

      if (!id) {
        return res.status(404).json({ errors: ['id not provided'] });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ errors: ['post not find'] });
      }

      await post.destroy();

      return res.json({ apagado: true });
		} catch (e) {
			return res.json({
				errors: [e.message],
			});
		}
	}

	async show(req, res) {
		try {
			const posts = await Post.findAll({
				attributes: ['id', 'title', 'description'],
				order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
				include: {
					model: Foto,
					attributes: ['url', 'originalname', 'filename'],
				},
			});
			res.json(posts)

		} catch (e) {
			return res.json({
				errors: e.message,
			});
		}
	}
}

export default new PostsController();