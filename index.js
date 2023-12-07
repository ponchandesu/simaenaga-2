const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(cors());
const prisma = new PrismaClient();
app.use(express.json());

app.post("/sign-up-valid", async (req, res) => {
  console.log(req.body);
  const { name, id, gender,password, passwordConfirm } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if (user) {
      // ユーザーが見つかった場合
      return res.json({ valid: false, message: "このIDは既に使用されています" });
    } else {
      // ユーザーが見つからなかった場合
      return res.json({ valid: true, message: "このIDは使用されていません" });;
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/sign-up", async (req, res) => {
  console.log(req.body);
  const { name, id, gender, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "このIDは既に使用されています" });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name,
        id: id,
        gender: gender,
        password: hashedPassword,
      }
    });

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});