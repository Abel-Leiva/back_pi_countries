const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM(
          "facil",
          "moderado",
          "dificil",
          "muy dificil",
          "extremo"
        ),

        allowNull: false,
      },
      duration: {
        type: DataTypes.FLOAT,
      },
      season: {
        type: DataTypes.ENUM("verano", "otoño", "invierno", "primavera"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
