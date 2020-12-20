const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin  User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Gandalf the White",
    email: "gandalf@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Legalos GreenLeaf",
    email: "legalos@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
