const { Router } = require("express");
const customerController = require("../controllers/customer.controller");
module.exports = Router()
  /**
   * @swagger
   * /customer/post:
   *  post:
   *    tags: [Customer]
   *    summary: Yangi Customer yaratish
   *    description: Yangi Customer yaratish jarayoni
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              address:
   *                type: string
   *              email:
   *                type: string
   *    responses:
   *      201:
   *        description:  Customer muvaffaqiyatli yaratildi!
   *      400:
   *        description:  Yaroqsiz kirish!
   *      500:
   *        description:  Server xatosi!
   */
  .post("/post", customerController.postCustomer) // ----postCustomer

  /**
   * @swagger
   * /customer/get:
   *  get:
   *    tags: [Customer]
   *    summary: Customerlar ro'yxati
   *    description: Customerlar ro'yxatini olish jarayoni
   *    responses:
   *      200:
   *        description: Customerlar ro'yxati!
   *      500:
   *        description: Server xatosi!
   */
  .get("/get", customerController.getCustomer) // ----getCustomer

  /**
   * @swagger
   * /customer/getById/{id}:
   *  get:
   *    tags: [Customer]
   *    summary: Customerni ID bo'yicha olish
   *    description: Customerni ID bo'yicha olish jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: Customer ID
   *        schema:
   *          type: integer
   *    responses:
   *      200:
   *        description: Customer ma'lumotlari!
   *      404:
   *        description: Customer topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .get("/getById/:id", customerController.getCustomerById) // ----getCustomerById

  /**
   * @swagger
   * /customer/update/{id}:
   *  put:
   *    tags: [Customer]
   *    summary: Customerni ID bo'yicha yangilash
   *    description: Customerni ID bo'yicha yangilash jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: Customer ID
   *        schema:
   *          type: integer
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              address:
   *                type: string
   *              email:
   *                type: string
   *    responses:
   *      200:
   *        description: Customer yangilandi!
   *      404:
   *        description: Customer topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .put("/update/:id", customerController.updateCustomer) // ----updateCustomer

  /**
   * @swagger
   * /customer/delete/{id}:
   *  delete:
   *    tags: [Customer]
   *    summary: Customerni ID bo'yicha o'chirish
   *    description: Customerni ID bo'yicha o'chirish jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: Customer ID
   *        schema:
   *          type: integer
   *    responses:
   *      200:
   *        description: Customer o'chirildi!
   *      404:
   *        description: Customer topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .delete("/delete/:id", customerController.deleteCustomer); // ----deleteCustomer
