'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('fotos', [{
			originalname: 'regressÃ£o.jpg',
			filename: '1711719123680.jpg',
			post_id: 1,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			originalname: 'decisao.jpg',
			filename: '1711719265942.jpg',
			post_id: 2,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			originalname: 'redes_neurais.jpg',
			filename: '1711719284836.jpg',
			post_id: 3,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			originalname: 'aprendizado_reforco.jpg',
			filename: '1711719301056.jpg',
			post_id: 4,
			created_at: new Date(),
			updated_at: new Date()
		},], {});

  },
};
