import { Model } from "sequelize";
export default (sequelize: any, DataTypes: { STRING: any; INTEGER: any; BOOLEAN: any; }) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: { User: any; }) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Avatar.init(
    {
      url: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Avatar",
    }
  );
  return Avatar;
};
