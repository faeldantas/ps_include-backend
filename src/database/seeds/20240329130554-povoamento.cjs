module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
				title: 'Introdução à Regressão Linear',
				description: 'Este post aborda os conceitos fundamentais da regressão linear, um dos modelos de machine learning mais básicos e amplamente utilizados. Explora-se a aplicação da regressão linear em problemas de previsão e análise de dados, bem como os princípios subjacentes ao seu funcionamento.',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				title: 'Classificação com Árvores de Decisão',
				description: 'Neste post, discutimos o uso de árvores de decisão em tarefas de classificação em machine learning. Explicamos como as árvores de decisão funcionam, como são construídas e como podem ser utilizadas para tomar decisões em problemas de classificação com múltiplas classes.',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				title: 'Redes Neurais Artificiais: Uma Visão Geral',
				description: 'Este post fornece uma visão geral das redes neurais artificiais (RNAs), um modelo de machine learning inspirado no funcionamento do cérebro humano. Discutimos a estrutura básica das RNAs, os diferentes tipos de camadas e como elas podem ser aplicadas em uma variedade de tarefas de aprendizado supervisionado e não supervisionado.',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				title: 'Aprendizado por Reforço: Uma Introdução',
				description: 'Neste post, introduzimos o conceito de aprendizado por reforço, uma abordagem de machine learning baseada em agentes que aprendem a tomar decisões otimizadas em um ambiente. Exploramos os elementos-chave do aprendizado por reforço, como recompensas, políticas e métodos de aprendizado, e discutimos exemplos de aplicação em jogos e robótica.',
				created_at: new Date(),
				updated_at: new Date()
			},
		], {});
  },

};
