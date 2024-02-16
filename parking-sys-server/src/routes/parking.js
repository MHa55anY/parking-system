import express from 'express';
import pool from '../models/common.js'
import {authenticateToken} from '../middleware/authMiddleWare.js'

const parkingRoutes = express.Router();

//expect -> [{code: 'dwdfd', coordinate: '0,0', userId: loggedInUser}]
parkingRoutes.post('/add-parking-slots', authenticateToken, async (req, res) => {
    const {body} = req;
    let query = 'INSERT INTO parking (code, coordinate, userId) VALUES'
    const rowsToAdd = body.map((b) => {
        return `('${b.code}', '${b.coordinate}', ${req.user.id})`
    })
    query += rowsToAdd + 'RETURNING *';

    try {
        const client = await pool.connect();
        const {rows} = await client.query(query);
        return res.status(200).json({ success: true, message: 'Added slots!', rows})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message});
    }
});

export default parkingRoutes;