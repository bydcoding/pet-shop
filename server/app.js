//路由統一與中介層設定、cors、cookies設定
import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import login from "./src/routes/login.js";
import signUp from "./src/routes/signUp.js";

console.log("🔎 app.js JWT_SECRET =", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api", login);
app.use("/api", signUp);

export default app;
