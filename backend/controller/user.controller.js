const db = require('../db.js')
class UserController{

    //Создание юзера
    async createUser(req,res) {
        const {name, surname, email, password, login} = req.body
        const newPerson = await db.query(`INSERT INTO users (name, surname, email, password, login) values ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, email, password, login])
        console.log(name, surname, email, password, login)
        res.json(newPerson.rows[0])
    }

    //Получить всех
    async getUsers(req,res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    // Получить одного юзера
    async getOneUser(req,res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

    // Обновить юзера
    async updateUser(req,res) {
        const {id, name, surname, email, password, login} = req.body
        const user = await db.query('UPDATE users set name = $1, surname = $2, email = $3, password = $4, login = $5 where id = $6 RETURNING *',
            [name, surname, email, password, login, id]
        )
        res.json(user.rows[0])
    }

    //Удалить юзера
    async deleteUser(req,res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

}


module.exports = new UserController()