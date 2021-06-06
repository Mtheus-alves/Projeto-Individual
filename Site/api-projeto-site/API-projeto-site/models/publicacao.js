'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
  let Publicacao = sequelize.define('Publicacao', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    manobra: {
      field: 'NomeManobra',
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      field: 'dataManobra',
      type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
      allowNull: false
    },
    
    fkUsuario: {
      field: 'fkUsuario',
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      tableName: 'progresso',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Publicacao;
};
