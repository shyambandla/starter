const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const mongoose = require('mongoose');
const md5 = require('md5');

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/auth').then(() => {
    console.log('connected to mongodb');
}).catch(err => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
});

const User = mongoose.model('User', userSchema);



app.post('/register', (req, res) => {
    
    const salt=(Math.random() + 1).toString(36).substring(7);
    console.log(salt);
    const password=md5(req.body.password + salt);
    console.log(password);
    const user = new User({name: req.body.name, email: req.body.email, password: password, salt: salt});

    user.save().then(() => {
        res.send('User created successfully');
    }
    ).catch(err => {
        res.status(400).send('Unable to create user');
    }
    );
});


app.post('/login', (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if (!user) {
            res.send('User not found');
        } else {
            const password=md5(req.body.password + user.salt);
            if (password === user.password) {
                res.send('User found');
            } else {
                res.send('Incorrect password');
            }
        }
    }).catch(err => {
        res.send('Error: ' + err);
    }
    );
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
