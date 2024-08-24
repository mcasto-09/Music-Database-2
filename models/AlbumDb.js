'use strict';
import {Model, DataTypes, Sequelize} from 'sequelize';
import { sequelize } from '.';


export default (sequelize, DataTypes) => {
  class AlbumDb extends Model {
    static associate(models) {
      // define association here
    }
  }

  AlbumDb.init({
    name: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AlbumDb',
  });

  return AlbumDb;
};