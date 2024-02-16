import express from 'express';
import pool from '../models/common.js'
import {authenticateToken} from '../middleware/authMiddleWare.js'

const parkingRoutes = express.Router();

parkingRoutes.post('/add-parking-slots', authenticateToken, (req, res) => {
    return res.json({loggedInUser: req.user})
});

export default parkingRoutes;