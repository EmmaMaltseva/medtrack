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

    // Получить одни лекартсва
    async getOneMedicines(req,res) {
        const id = req.params.id
        const medicine = await db.query('SELECT * FROM medicines where id = $1', [id])
        res.json(medicine.rows[0])
    }

    // Обновить Лекарства
    async updateMedicicnes(req,res) {
        const {id, name, title, dozimitr, instruction, id_users, id_reminders, id_shedules} = req.body
        const medicine = await db.query('UPDATE medicines set name = $1, title = $2, dozimitr = $3, instruction = $4, id_users = $5, id_reminders = $6, id_shedules = $7 where id = $8 RETURNING *',
            [name, title, dozimitr, instruction, id_users, id_reminders, id_shedules, id]
        )
        res.json(medicine.rows[0])
    }

    //Удалить юзера
    async deleteMedicines(req,res) {
        const id = req.params.id
        const medicine = await db.query('DELETE FROM medicines where id = $1', [id])
        res.json(medicine.rows[0])
    }

}

module.exports = new MedicinesController()