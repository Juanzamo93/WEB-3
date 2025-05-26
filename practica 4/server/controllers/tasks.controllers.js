import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM `premier league` ORDER BY id ASC'
        );
        res.json(result);
    } catch (error) {
        console.error('Error al obtener las tareas:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM `premier league` WHERE ID = ?',
            [req.params.id]
        );
        if (result.length === 0)
            return res.status(404).json({ message: 'Equipo no encontrado' });

        res.json(result[0]);
    } catch (error) {
        console.error('Error al obtener la tarea:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const createTask = async (req, res) => {
    try {
        const { ciudad, equipo, stadium } = req.body;
        const [result] = await pool.query(
            'INSERT INTO `premier league` (ciudad, equipo, stadium) VALUES (?, ?, ?)',
            [ciudad, equipo, stadium]
        );
        console.log(result);
        res.json({
            id: result.insertId,
            ciudad,
            equipo,
            stadium,
        });
    } catch (error) {
        console.error('Error al crear la tarea:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const updateTasks = async (req, res) => {
    try {
        const result = await pool.query(
            'UPDATE `premier league` SET ? WHERE ID = ?',
            [req.body, req.params.id]
        );
        res.json(result);
    } catch (error) {
        console.error('Error al actualizar la tarea:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM `premier league` WHERE ID = ?',
            [req.params.id]
        );
        if (result.affectedRows === 0)
            return res.status(404).json({ message: 'Equipo no encontrado' });

        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar la tarea:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};