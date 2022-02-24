// import express from "express";
// const express = require("express");  위에랑 같은 문장인데 윗 문장이 더 직설적으로 보임

import express from "express"; // express를 사용하기 위한 import
import morgan from "morgan"; // morgan을 사용하기 위한 import

import globalRouter from "./routers/globalRouter"; // 어떤 router를 사용할 것인가에 따른 import및 경로
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000; // 기본 port번호 설정이 바로 가능

const app = express(); // 이 한줄이 express application을 사용할 수 있게 해줌
const logger = morgan("dev");

app.set("view engine", "pug"); // pug를 연결하기 위한 세팅
app.set("views", process.cwd() + "/src/views"); // pug의 기본 디폴트 경로를 변경하기

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter); // 여기가 시작! URL에서 /users로 요청을 하면 -> userRouter를 찾게 되는데 그건 위에 import된 곳으로 가게되지!
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🛺`);

app.listen(PORT, handleListening);
