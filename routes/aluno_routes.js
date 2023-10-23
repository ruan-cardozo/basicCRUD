import express from "express";
import {aluno} from "../controller/aluno_controller.js";

let router = express.Router();

router.get("/aluno", aluno.all);
router.post("/aluno", aluno.create);
// router.put();
// router.delete();

export {router}