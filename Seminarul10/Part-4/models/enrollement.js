const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Enrollement = sequelize.define(
  "enrollement",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { tableName: "enrollements" }
);

module.exports = Enrollement;
