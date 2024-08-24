'use strict';
import {Model, DataTypes, Sequelize} from 'sequelize';
import { sequelize } from '../config/config.json'


export default (sequelize, DataTypes) => {
  class AlbumDb extends Model {
    static associate(models) {
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