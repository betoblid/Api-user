const sql = require("./config")

class UserLogin {

    async getUserLogin() {
        const result = await sql`select * from login`;
        return result
    }
   
    async NewsUserLogin(nome, email, senha){
        const result = await sql`INSERT INTO login(nome,email,senha) VALUES (${nome},${email},${senha})`;
        return result
    }

    async VerifyLogin(email, senha){

        const result = await sql`SELECT l.nome,l.email FROM login AS l WHERE EXISTS(SELECT 1 FROM login AS a WHERE ${email} = l.email and ${senha} = l.senha)`;
        return result
    }

    async RemoveUserlogin(id){
        const result = await sql`DELETE FROM login WHERE id = ${Number(id)}`
        return result
    }
}
module.exports = UserLogin
