const { Router } = require("express");
const userController = require("../controllers/user.controller");
module.exports = Router()
  /**
   * @swagger
   * /user/post:
   *  post:
   *    tags: [User]
   *    summary: Yangi User yaratish
   *    description: Yangi User yaratish jarayoni
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              email:
   *                type: string
   *              password:
   *                type: string
   *    responses:
   *      201:
   *        description:  User muvaffaqiyatli yaratildi!
   *      400:
   *        description:  Yaroqsiz kirish!
   *      500:
   *        description:  Server xatosi!
   */
  .post("/post", userController.postUser) // ----postuser

  /**
   * @swagger
   * /user/get:
   *  get:
   *    tags: [User]
   *    summary: Userlar ro'yxati
   *    description: Userlar ro'yxatini olish jarayoni
   *    responses:
   *      200:
   *        description: Userlar ro'yxati!
   *      500:
   *        description: Server xatosi!
   */
  .get("/get", userController.getUser) // ----getUser

  /**
   * @swagger
   * /user/search:
   *  get:
   *    tags: [User]
   *    summary: Userni nomi yoki email orqali olish
   *    description: Userni nomi yoki email orqali olish jarayoni
   *    parameters:
   *      - in: query
   *        name: query
   *        required: true
   *        description: User Nomi/Email
   *        schema:
   *          type: string
   *    responses:
   *      200:
   *        description: User qidiruvi yakunlandi!
   *      400:
   *        description: Qidiruv so'rovi talab qilinadi
   *      500:
   *        description: Server xatosi!
   */
  .get("/search", userController.searchUser) // ----searchUser

  /**
   * @swagger
   * /user/getById/{id}:
   *  get:
   *    tags: [User]
   *    summary: Userni ID bo'yicha olish
   *    description: Userni ID bo'yicha olish jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: User ID
   *        schema:
   *          type: integer
   *    responses:
   *      200:
   *        description: User ma'lumotlari!
   *      404:
   *        description: User topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .get("/getById/:id", userController.getUserById) // ----getUserById

  /**
   * @swagger
   * /user/update/{id}:
   *  put:
   *    tags: [User]
   *    summary: Userni ID bo'yicha yangilash
   *    description: Userni ID bo'yicha yangilash jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: User ID
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
   *              email:
   *                type: string
   *              password:
   *                type: string
   *    responses:
   *      200:
   *        description: User yangilandi!
   *      404:
   *        description: User topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .put("/update/:id", userController.updateUser) // ----updateUser

  /**
   * @swagger
   * /user/delete/{id}:
   *  delete:
   *    tags: [User]
   *    summary: Userni ID bo'yicha o'chirish
   *    description: Userni ID bo'yicha o'chirish jarayoni
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: User ID
   *        schema:
   *          type: integer
   *    responses:
   *      200:
   *        description: User o'chirildi!
   *      404:
   *        description: User topilmadi!
   *      500:
   *        description: Server xatosi!
   */
  .delete("/delete/:id", userController.deleteUser); // ----deleteUser
