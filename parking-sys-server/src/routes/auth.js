import express from 'express';

const userRoutes = express.Router();

userRoutes.post('/register', (req, res) => {
    const {body: {name, password}} = req;

    console.log(req)
    res.json({name: 'got name ' + name, password: 'sushh!!!' + password});
});

export default userRoutes;