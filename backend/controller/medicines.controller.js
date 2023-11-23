const db = require("../db");

class MedicinesController {

    //Создание юзера
    async createPost(req, res) {
        const {name, type, dose, unit, user_id} = req.body
        const newMedicines = await db.query(`INSERT INTO medicines (name, type, dose, unit, user_id) values ($1, $2, $3, $4, $5) RETURNING *`, [name, type, dose, unit, user_id])
        console.log(name, type, dose, unit, user_id)
        res.json(newMedicines.rows[0])
    }

//Поиск по Пользователю (user=demicines)
    async getPostsByUser(req, res) {
        const id = req.query.id
        const medicines = await db.query(`SELECT * FROM medicines where user_id = $1`, [id])
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
        const {name, type, dose, unit, user_id} = req.body
        const medicine = await db.query('UPDATE medicines set name = $1, type = $2, dose = $3, unit = $4, user_id = $5 where id = $8 RETURNING *',
            [name, type, dose, unit, user_id, id]
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