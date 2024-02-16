import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../models/common.js'
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from './secret.js';

const userRoutes = express.Router();

userRoutes.post('/register', async (req, res) => {
    const {body: {name, password}} = req;
    const client = await pool.connect();
    const { rows } = await client.query(`SELECT id FROM users WHERE username='${name}'`);
    if(rows.length > 0) 
        return res.status(409).json({ success: false, message: 'User already exists!' });
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        client.query(`INSERT INTO users (username,password) VALUES ('${name}', '${hashedPassword}')`)
        return res.status(200).json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Registration failed!' });
    } finally{
        client.release();
    }
});

userRoutes.post('/login', async (req, res) => {
     const {body: {name, password}} = req;
     const client = await pool.connect();
     try {
        const user = await client.query(`SELECT * FROM users WHERE username='${name}'`);
        if (user.rowCount > 0) {
            try {
                if (await bcrypt.compare(password, user.rows?.[0].password)) {
                    const accessToken = jwt.sign(user.rows?.[0], ACCESS_TOKEN_SECRET);
                    return res.status(200).json({ success: true, message: 'Login successful!', accessToken });
                }
                else return res.status(401).json({ success: false, message: 'Incorrect Password!' });
            } catch (error) {
                console.log(error)
                return res.status(500).json({ success: false, message: 'Internal Server Error!' });
            }
        }
        else return res.status(401).json({ success: false, message: 'Please check your username' });
     } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error!' });
     }
     finally{
        client.release();
     }

})

export default userRoutes;