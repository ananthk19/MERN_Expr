const express = require('express');
const router = express.Router();
const userModel = require('../models/users.js');

router.get('/', async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.send(allUsers);
    }
    catch (err) {
        res.send(err.message);
    }
});

router.post('/newUser', async (req, res) => {
    const newUser = new userModel({
        userName: req.body.userName,
        password: req.body.password
    });
    try{
        const savedUser = await newUser.save();
        res.json('Success');
    }
    catch (err) {
        res.send(err.message);
    }
});

router.post('/verifyUser', async (req, res) =>{
//    console.log(req.body);
    try {
        const user = await userModel.findOne({userName: req.body.userName, password: req.body.password});

        if (user === null)  res.json('Invalid user');
        else res.json('verified');

    } catch (err) {
        res.json(err.message);
    }
});

router.delete('/', async (req, res) => {
    try {
        const deletedUser = await userModel.deleteOne({userName: req.body.userName});
        res.send(`${deletedUser} has been deleted`);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;