	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		NomeCompleto: {
			field: 'NomeCompleto',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		login_backend: {
			field: 'NomeUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
