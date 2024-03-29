import Sequelize from 'sequelize';
import { Model } from 'sequelize';
import appConfig from '../config/appConfig.js';

class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O valor não pode ser vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O valor não pode ser vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/pictures/${this.getDataValue('filename')}`;
        },
      },
			post_id: {
				type: Sequelize.INTEGER,
				validate: {
          notEmpty: {
            msg: 'O valor não pode ser vazio',
          },
        },

			},
    }, {
      sequelize,
      tableName: 'fotos',
      underscored: true,
    });

		return this;
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: 'post_id' });
  }
}

export default Foto;
