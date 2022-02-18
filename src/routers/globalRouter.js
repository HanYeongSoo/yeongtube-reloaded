import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("HomePage에 오신걸 환영합니다.");

globalRouter.get("/", handleHome);

export default globalRouter;
