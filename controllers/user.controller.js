const { User } = require("../models/user.model"); // ----User Model
const {
  userValidation,
  validationUser,
} = require("../validations/user.validation"); // ----User Validation

exports.register = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User muvaffaqiyatli qo'shildi",
      user: user,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; // ----Register

exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).send(user);
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
