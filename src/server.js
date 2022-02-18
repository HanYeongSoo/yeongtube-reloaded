// import express from "express";
// const express = require("express");  위에랑 같은 문장인데 윗 문장이 더 직설적으로 보임

import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); // 이 한줄이 express application을 사용할 수 있게 해줌
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("HomePage에 오신걸 환영합니다.");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User Page 입니다.");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("watch video 페이지 입니다.");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🛺`);

app.listen(PORT, handleListening);
