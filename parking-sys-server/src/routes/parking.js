import express from 'express';
import pool from '../models/common.js'
import {authenticateToken} from '../middleware/authMiddleWare.js'
import ParkingStates from '../types/ParkingStatesEnum.js';

const parkingRoutes = express.Router();

//expect -> {code: 'dwdfd', coordinate: '0,0', userId: loggedInUser}
parkingRoutes.post('/occupy-parking-slot', authenticateToken, async (req, res) => {
    const {body} = req;
    let query = 'INSERT INTO parking (code, coordinate, userId, status) VALUES'
    const rowToAdd =`('${body.code}', '${body.coordinate}', ${req.user.id}, '${ParkingStates.OCCUPIED}')`
    query += rowToAdd + 'RETURNING *';

    try {
        const client = await pool.connect();
        const {rows} = await client.query(query);
        return res.status(200).json({ success: true, message: 'Added slots!', rows})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message});
    }
});

parkingRoutes.get('/fetch-occupied-slots', authenticateToken, async (req, res) => {
    const query = `SELECT * FROM parking WHERE userId='${req.user.id}'`;
    try {
        const client = await pool.connect();
        const {rows} = await client.query(query);
        return res.status(200).json({ success: true, message: 'Loaded saved parking!', rows})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message});
    }
});

export default parkingRoutes;