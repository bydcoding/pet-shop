import express from "express";
import pool from "../db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

router.post("/login", async (req, res) => {
  const { account, password } = req.body;
  if (!account || !password) {
    return res.status(400).json({ ok: false, error: "缺少帳號或密碼" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM user WHERE account = ? AND password = ?",
      [account, password]
    );
    if (rows.length == 0)
      return res.status(401).json({ ok: false, error: "帳號或密碼錯誤" });
    const user = rows[0];
    const payload = {
      id: user.user_id,
      account: user.account,
      role: user.role,
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
