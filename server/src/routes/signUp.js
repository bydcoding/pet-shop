import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
const router = express.Router();
router.post("/sign-up", async (req, res) => {
  const { name, account, password } = req.body;

  if (!name || !account || !password) {
    return res.status(400).json({
      ok: false,
      error: "請填寫完整資料",
    });
  }
  try {
    const [rows] = await pool.query(
      "SELECT user_id FROM users WHERE account = ?",
      [account]
    );
    if (rows.length > 0) {
      throw new Error("ACCOUNT_EXISTS");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name,account,password) VALUES(?,?,?)";
    await pool.query(sql, [name, account, hashPassword]);
    return res.status(201).json({
      ok: true,
      message: "註冊成功",
    });
  } catch (err) {
    if (err.message === "ACCOUNT_EXISTS") {
      return res.status(409).json({
        ok: false,
        error: "帳號重複",
      });
    }
    console.log(err);
    res.status(500).json({
      ok: false,
      error: "伺服器錯誤",
    });
  }
});
export default router;
