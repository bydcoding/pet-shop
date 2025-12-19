import express from "express";
import pool from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

router.post("/login", async (req, res) => {
  const { account, password } = req.body;
  if (!account || !password) {
    return res.status(400).json({ ok: false, error: "缺少帳號或密碼" });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE account = ?", [
      account,
    ]);
    if (rows.length == 0)
      return res.status(401).json({ ok: false, error: "帳號或密碼錯誤0" });
    const users = rows[0];

    const passwordMatch = await bcrypt.compare(password, users.password);

    if (!passwordMatch) {
      return res.status(401).json({ ok: false, error: "帳號或密碼錯誤1" });
    }

    const payload = {
      id: users.user_id,
      name: users.name,
      account: users.account,
      role: users.role,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return res.status(201).json({
      ok: true,
      token,
      message: "登入成功",
      user: payload,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ ok: false, error: "伺服器錯誤" });
  }
});

export default router;
