import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User Page 입니다.");

userRouter.get("/edit", handleEditUser);

export default userRouter;
