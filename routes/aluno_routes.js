import express from "express";
import {aluno} from "../controller/aluno_controller.js";

let router = express.Router();

router.get("/alunos", aluno.all);
router.post("/aluno/inserir", aluno.post);
router.put("/aluno/editar/:matricula", aluno.put);
// router.delete();

export {router}