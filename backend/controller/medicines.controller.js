const db = require("../db");

class MedicinesController {

    //Создание юзера
    async createPost(req, res) {
        const {name, title, dozimitr, instruction, id_users, id_reminders, id_shedules} = req.body
        const newMedicines = await db.query(`INSERT INTO medicines (name, title, dozimitr, instruction, id_users, id_reminders, id_shedules) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, title, dozimitr, instruction, id_users, id_reminders, id_shedules])
        console.log(name, title, dozimitr, instruction, id_users, id_reminders, id_shedules)
        res.json(newMedicines.rows[0])
    }

//Поиск по Пользователю (user=demicines)
    async getPostsByUser(req, res) {
        const id = req.query.id
        const medicines = await db.query(`SELECT * FROM medicines where id_users = $1`, [id])
        res.json(medicines.rows)
    }

}

module.exports = new MedicinesController()