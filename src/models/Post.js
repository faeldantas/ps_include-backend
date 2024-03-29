import Sequelize,{ Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init({
			    title: {
			      type: Sequelize.STRING,
			      allowNull: false,
			      unique: true
			    },
			    description: {
			      type: Sequelize.TEXT
			    }
			  },{
      		sequelize,
					tableName: 'posts',
    		});

    return this;
  }

	static associate(model) {
    this.hasMany(model.Foto, { foreignKey: 'post_id' });
  }
}

export default Post;
