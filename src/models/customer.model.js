module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  }); // ----Customer Model

  Customer.associate = (models) => {
    Customer.hasMany(models.User, {
      foreignKey: "customer_id",
      as: "user_customer",
    });
  }; // ----associate

  return Customer; // ----Return Customer Model
};
