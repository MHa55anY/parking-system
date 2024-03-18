import express from 'express';
import pool from '../models/common.js'
import {authenticateToken} from '../middleware/authMiddleWare.js'
import ParkingStates from '../types/ParkingStatesEnum.js';

const parkingRoutes = express.Router();

//expect -> {code: 'dwdfd', coordinate: '0,0', userId: loggedInUser}
parkingRoutes.put('/occupy-parking-slot', authenticateToken, async (req, res) => {
    const {body} = req;
    const {code, coordinate, driverName, phoneNumber, vehicleNumber, vehicleModel} = body;
    let querySlot = 'INSERT INTO parking (code, coordinate, userId, status) VALUES'
    const slotToAdd =`('${code}', '${coordinate}', ${req.user.id}, '${ParkingStates.OCCUPIED}')`;
    querySlot += slotToAdd + 'RETURNING *';

    let insertDriver = 'INSERT INTO driver (name, phone_number, vehicle_number, vehicle_model, parking_id) VALUES';
    let parkingId = null;
    try {
        const client = await pool.connect();
        const {rows: slots, error: slotError} = await client.query(querySlot);
        parkingId = slots[0].id;
        const driverToAdd = `('${driverName}', '${phoneNumber}', '${vehicleNumber}', '${vehicleModel}', ${parkingId})`;
        insertDriver += driverToAdd;
        console.log(insertDriver)
        const {driver} = await client.query(insertDriver);
        const result = {slots, driver}
        return res.status(200).json({ success: true, message: 'Ocuupied Slot!', result})
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