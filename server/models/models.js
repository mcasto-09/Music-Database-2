'use strict';
import {Model, DataTypes} from 'sequelize';
// import { sequelize } from '../../config/config.json'
// import { AlbumDb } from '.';
import db from '../db.js';
import util from 'util';

export class AlbumDb extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}


export default (sequelize, DataTypes) => {
  class AlbumDb extends Model {
    static associate(models) {
    }
  }

  AlbumDb.init({
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    dislikes: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'AlbumDb',
  });

  return AlbumDb;
};

// AlbumDb.hasMany(AlbumDb,{foreignKey:"name"})