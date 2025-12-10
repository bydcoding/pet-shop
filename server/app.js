//路由統一與中介層設定、cors、cookies設定
import express from "express";
import cors from "cors";
import "dotenv/config";
import login from "./src/routes/login.js";

console.log("🔎 app.js JWT_SECRET =", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", login);

export default app;
