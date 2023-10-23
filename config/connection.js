import mysql2 from "mysql2/promise";
import util from "util";

export default async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    try {
        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:@localhost:3306/universidade");
        console.log("Conectado ao SGBD MySQL");
        global.connection = connection;
        return connection;
  } catch (e) {
        console.log("Ocorreu um erro ao conetar com o banco de dados");
  }
}

// connect.query = util.promisify(connect.query);