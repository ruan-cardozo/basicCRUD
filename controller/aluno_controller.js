import connect from "../config/connection.js";

let aluno = {};

const con = await connect();
aluno.all = async function(req, res){
    try{
        let alunos = await con.query("SELECT * FROM aluno;");
        res.send(alunos);
    } catch (e) {
        console.log("Erro", e);
    }
}

aluno.create = async function (req, res) {
    try {
        let aluno = req.body;
        let sql = "INSERT INTO aluno(matricula, nome, endereco, cidade) VALUES (?,?,?,?);";
        let values = [aluno.matricula, aluno.nome, aluno.endereco, aluno.cidade];
        let result = await con.query(sql, values).send({
            status:"Inserção efetuada com sucesso",
            result:result
        });

    } catch (e) {
        console.log("Erro", e);
    }
} 


export {aluno}