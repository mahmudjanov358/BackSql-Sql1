const { User } = require("../models"); // ----User Model
const { userValidation } = require("../validations/user.validation"); // ----User Validation

exports.register = (req, res) => {
  const { error } = userValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const user = User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User muvaffaqiyatli qo'shildi",
      user: user,
    });
  } catch (error) {
    console.error("User qo'shishda xatolik yuz beri!", error);
    return res
      .status(500)
      .json({ success: false, message: "Ichki Server xatosi!" });
  }
}; // ----Register
