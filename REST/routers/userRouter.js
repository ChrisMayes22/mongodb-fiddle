const express       = require('express');
const router        = new express.Router();
                      require('../db/mongoose');
const User          = require('../models/users');

router.post('/users', async (req, res, next) => {
    console.log('USERS POST ACCESSED');
    try {
        const user = new User(req.body);
        await user.save();
        res.send('user saved successfully!')
    } catch (e) {
        res.status(400).send(e.message);
    }
})

router.get('/users', async (req, res, next) => {
    console.log('USERS GET ACCESSED');
    try {
        const users = await User.find({});

        if(!users){
            res.status(404).send('404: Resources not found');
        }

        res.send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
})

router.get('/users/:name', async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.params.name });
        if(!user) {
            res.status(404).send('404: Resources not found');
        } else {
            res.send(user);
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
})

router.patch('/users/:id', async (req, res, next) => {
    const updates = req.body;
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = Object.keys(updates).every(field => allowedUpdates.includes(field));

    if(!isValidOperation){
        res.status(400).send({ "ERR":{ "MSG":"Invalid Operation" }});
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        
        if(!user){
            res.status(404).send('404: Resources not found');
        } else {
            res.send(user);
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
})

router.delete('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if(!user){
            res.status(404).send('404: Resources not found');
        } else {
            res.send(user);
        }

    } catch (e) {
        res.status(400).send(e.message);
    }
})

module.exports = router;