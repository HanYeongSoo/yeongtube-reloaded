// import express from "express";
// const express = require("express");  위에랑 같은 문장인데 윗 문장이 더 직설적으로 보임

import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("This is home");
};
const handleLogin = (req, res) => {
  return res.send("This is Login Page!");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🛺`);

app.listen(PORT, handleListening);
