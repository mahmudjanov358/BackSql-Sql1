const bcrypt = require("bcrypt"); // ----Bcrypt Library

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
  }); // ----User Model

  User.associate = (models) => {
    User.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  }; // ----associate

  User.beforeSave(async (user) => {
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  }); // ----beforeSave
  return User; // ----Return User Model
};
