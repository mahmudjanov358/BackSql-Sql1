# 📌 SQL1 — Express.js + Sequelize + PostgreSQL Backend

**SQL1** — bu o‘rganish va amaliyot uchun yozilgan backend loyiha bo‘lib,  
`Express.js` frameworki asosida qurilgan va `Sequelize ORM` orqali `PostgreSQL` ma’lumotlar bazasi bilan ishlaydi.  
Swagger yordamida API hujjatlari avtomatik generatsiya qilingan.

---

## ✨ Texnologiyalar

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Joi](https://joi.dev/) – validatsiya
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) – parolni hash qilish
- [Swagger](https://swagger.io/) – API hujjatlash
- [dotenv](https://github.com/motdotla/dotenv) – muqim sozlamalar

---

## 📂 Loyiha tuzilmasi

```

SQL1
├── node_modules/            # NPM paketlari
├─ src/                      # SRC kerakli manba
│ ├─ configs/                # DB konfiguratsiyasi
│ │ └─ database.js           # DB bog'lsnish funksiyasi
│ ├─ controllers/            # API logikasi
│ │ └─ user.controller.js    # User controller
│ ├─ documents/              # Swagger sozlamalari
│ │ └─ swagger.doc.js        # Swagger Options
│ ├─ models/                 # Sequelize modellar
│ │ ├─ main.js               # Jamlangan modellar
│ │ └─ user.model.js         # User model
│ ├─ routers/                # URL marshrutlar
│ │ └─ user.routes.js        # User routes
│ └─ validations/            # Joi validatsiya funksiyalari
│ └─ user.validation.js      # User validation
├── .env                     # Maxfiy ma'lumotlar (token, db uri)
├── .gitignore               # Gitga qo‘shilmaydigan fayllar
├── index.js                 # Kirish nuqtasi (app yaratib, serverni ishga tushiradi)
├── package-lock.json        # NPM lockfile (versiyalarni qattiq belgilaydi)
├── package.json             # Loyihaning metadata va dependencies
└── README.md                # Loyihani tushuntiruvchi fayl

```

## 🚀 O‘rnatish va ishga tushirish

1. **Repository’ni klonlash:**

```bash
git clone https://github.com/mahmudjanov358/BackSql-Sql1.git
cd SQL1
```

2. **Paketlarni o‘rnatish:**

```bash
npm i bcrypt cors dotenv express joi jsonwebtoken pg pg-hstore sequelize swagger swagger-jsdoc swagger-ui-express
```

3. **Serverni ishga tushurish:**

```bash
npm run go        # Tez/Oson
npm run go:dev    # Tez/Oson (Yiroq)
npm run go:start  # Tez/Oson (Yiroq)
npm run dev       # Doimiy
npm run dev:go    # Doimiy (Yiroq)
npm run dev:start # Doimiy (Yiroq)
npm run start     # Yondashuvli
npm run start:go  # Yondashuvli (Yiroq)
npm run start:dev # Yondashuvli (Yiroq)
npm run index.js  # Index.js (Yondashuvli Yiroq)
```

---

## 📌 Swagger API hujjatlari

👉 Swagger UI’ga kirish uchun:

```
http://localhost:4000/api-docs
```

U yerda har bir endpointni test qilishingiz mumkin (`CREATE`, `READ`, `UPDATE`, `DELETE`).

---

## 💬 Muallif

**ABDULLOH MAHMUDJANOV** tomonidan yaratilgan — **_"Backend SQL1 loyihasi"_**

---

✨ Muallif so‘zi:
**_“ٱلصَّمْتُ هُوَ ٱلْخِيَارُ ٱلْأَفْضَلُ وَٱلْأَكْثَرُ حِكْمَةً!!!”_** |
**_“Sukunat — eng yaxshi va eng oqilona tanlovdur!!!”_**

📬 **Aloqa uchun ijtimoiy sahifalar:**

- [<img src="https://cdn.simpleicons.org/telegram/27A7E7" width="16" height="16" /> Telegram](https://t.me/mahmudjanov_2009)
- [<img src="https://cdn.simpleicons.org/youtube/FF0000" width="16" height="16" /> YouTube](https://www.youtube.com/@Front-endBack-end/UCWuJde129M1sMZsVdrWGdmw)
- [<img src="https://cdn.simpleicons.org/instagram/E4405F" width="16" height="16" /> Instagram](https://instagram.com/a_mahmudjanov)
- [<img src="https://cdn.simpleicons.org/github/999999" width="16" height="16" /> GitHub](https://github.com/mahmudjanov358)

---

## 📄 Litsenziya

Ushbu loyiha **MIT** litsenziyasi asosida tarqatiladi. Buning uchun [**LICENSE**](LICENSE) faylga qarab ko'ring.
