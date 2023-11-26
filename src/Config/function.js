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

    async RemoveUserlogin(id){
        const result = await sql`DELETE FROM login WHERE id = ${Number(id)}`
        return result
    }
}
module.exports = UserLogin
