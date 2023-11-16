const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3), //quizas sea redundante el varchar
        primaryKey: true,
        validate: {
          len: [3, 3],
        },
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageFlag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subRegion: { type: DataTypes.STRING },
      area: { type: DataTypes.STRING }, //aun no se que es area, quizas sea tipo numerico
      population: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: false }
  );
};
