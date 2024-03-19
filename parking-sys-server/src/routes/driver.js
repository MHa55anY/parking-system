import express from 'express';
import pool from '../models/common.js'
import {authenticateToken} from '../middleware/authMiddleWare.js'

const driverRoutes = express.Router();

driverRoutes.get('/driver-by-parking-id/:id', authenticateToken, async (req,res) => {
    const {params: { id }} = req;
    //fetch driver by id
    const query = `SELECT name, phone_number, vehicle_number, vehicle_model, createdOn FROM driver WHERE parking_id='${id}'`;

    try {
        const client = await pool.connect();
        const {rows: drivers} = await client.query(query);
        if(drivers.length > 0) {
            const driver = drivers[0];
            res.json(({...driver}));
        }
        else{
            res.status(500).json({error: "No driver found for this parking!"})
            throw new Error("No driver found for this parking!")
        }
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

export default driverRoutes;