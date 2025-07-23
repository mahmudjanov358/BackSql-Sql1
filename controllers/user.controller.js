const { User } = require("../models/main"); // ----User Model
const { where } = require("sequelize"); // ----Sequelize Library
const {
  userValidation,
  validationUser,
} = require("../validations/user.validation"); // ----User Validation

exports.postUser = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = User.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; // ----postUser

exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; // ----getUser

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send("User topilmadi!");
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  const { error } = validationUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send("User topilmadi!");

    await user.update(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; // ----updateUser

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send("User topilmadi!");

    const userData = user.toJSON();
    await user.destroy();
    return res.status(200).send(userData);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.searchUser = async (req, res) => {
  try {
    console.log("Query received — ", req.query.query);
    const { query } = req.query;

    if (!query) {
      return res.status(400).send("Search query is required!");
    } else {
      const user = await User.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${query}%` } },
            { email: { [Op.iLike]: `%${query}%` } },
          ],
        },
        // ----include: [{ model: Customer, as: "customer" }],
      });
      return res.status(200).send(user);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
