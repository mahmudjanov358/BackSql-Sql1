const { Customer } = require("../models/main");
const { validationCustomer } = require("../validations/customer.validation");

exports.postCustomer = async (req, res) => {
  const { error } = validationCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer = await Customer.create(req.body);
    return res.status(201).send({ message: "Mijoz qo'shildi!", customer });
  } catch (error) {
    return res.status(500).send("Ichki Server xatoligi!", error.message);
  }
}; // ----postCustomer

exports.getCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).send({ message: "Mijozlar ro'yxati", customers });
  } catch (error) {
    return res.status(500).send("Ichki Server xatoligi!", error.message);
  }
}; // ----getCustomer

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Mijoz aniqlanmadi!");
    else return res.status(200).send(customer);
  } catch (error) {
    return res.status(500).send("Ichki Server xatoligi!", error.message);
  }
}; // ----getCustomerById

exports.updateCustomer = async (req, res) => {
  const { error } = validationCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  else {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (!customer) return res.status(404).send("Mijoz aniqlanmadi!");
      else {
        await customer.update(req.body);
        return res.status(200).send(customer);
      }
    } catch (error) {
      return res.status(500).send("Ichki Server xatoligi!", error.message);
    }
  }
}; // ----updateCustomer

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Mijoz aniqlanmadi!");
    else {
      const customerData = customer.toJSON();
      await customer.destroy();
      return res.status(200).send(customerData);
    }
  } catch (error) {
    return res.status(500).send("Ichki Server xatoligi!", error.message);
  }
}; // ----deleteCustomer
