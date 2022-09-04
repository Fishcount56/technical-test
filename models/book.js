'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.hasMany(models.userbook, {
        as: 'book_Owned',
        foreignKey: {
          name: 'idbook'
        }
      })
    }
  }
  book.init({
    booktitle: DataTypes.STRING,
    bookauthor: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};