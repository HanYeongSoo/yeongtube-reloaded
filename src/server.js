// import express from "express";
// const express = require("express");  위에랑 같은 문장인데 윗 문장이 더 직설적으로 보임

import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); // 이 한줄이 express application을 사용할 수 있게 해줌
const logger = morgan("dev");

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

const handleHome = (req, res) => {
  return res.send("This is home");
};

app.use(logger);
app.get("/", handleHome); // route를 만들고 그 안에 handler를 만드는거지

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🛺`);

app.listen(PORT, handleListening);
