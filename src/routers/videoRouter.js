import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("watch video 페이지 입니다.");

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
