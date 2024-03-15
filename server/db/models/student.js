'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      thanks: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      phase: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Task;
};
