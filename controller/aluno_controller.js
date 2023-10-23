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

aluno.post = async function (req, res) {
    try {
        let aluno = req.body;
        let sql = "INSERT INTO aluno(matricula, nome, endereco, cidade) VALUES (?,?,?,?);";
        let values = [aluno.matricula, aluno.nome, aluno.endereco, aluno.cidade];
        let result = await con.query(sql, values);
        res.send({
            status:"Inserção efetuada com sucesso",
            result: result
        });

    } catch (e) {
        console.log("Erro", e);
    }
} 

aluno.put = async function(req, res) {
    try {
        let matricula = req.params.matricula;
        let novoAluno = req.body;

        let sql = "UPDATE aluno SET nome=?, endereco=?, cidade=? WHERE matricula=?;";
        let values = [matricula, novoAluno.nome, novoAluno.endereco, novoAluno.cidade];

        let result = await con.query(sql, values)
        res.send({
            status: "Edição efetuada com sucesso",
            result: result
        });

    } catch (e) {
        console.log("Erro");
    }
}


export {aluno}