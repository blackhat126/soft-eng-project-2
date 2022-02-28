const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/item.js');

//Enter the MongoDB connection string below
const dbURI = '';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTechnology: true})
   .then((result) => console.log('connected to db'))
   .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

let password;

app.get('/', (req, res) => {
    if (password == 'Supervisor') {
        Item.find()
        .then((result) => {
            res.render('main-pageS', {menuItems: result});
        }) 
        .catch((err) => {
            console.log(err);
        });
    }

    else if (password == 'Manager') {
        Item.find()
        .then((result) => {
            res.render('main-pageM', {menuItems: result});
        }) 
        .catch((err) => {
            console.log(err);
        });
    }
});

app.get('/login', (req, res) => {
    password = '';
    res.render('login-page');
});

app.post('/', (req, res) => {
    if (req.body.password == 'Entry') {
        password = 'Entry';
        Item.find()
        .then((result) => {
            res.render('main-pageE', {menuItems: result});
        }) 
        .catch((err) => {
            console.log(err);
        });
    }

    else if (req.body.password == 'Supervisor') {
        password = 'Supervisor';
        Item.find()
        .then((result) => {
            res.render('main-pageS', {menuItems: result});
        }) 
        .catch((err) => {
            console.log(err);
        });
    }

    else if (req.body.password == 'Manager') {
        password = 'Manager';
        Item.find()
        .then((result) => {
            res.render('main-pageM', {menuItems: result});
        }) 
        .catch((err) => {
            console.log(err);
        });
    }

    else if ((password != 'Entry') && (password != 'Supervisor') && (password != 'Manager')) {
        res.render('login-page');
    }

    else {
        console.log(req.body);
        let item = new Item(req.body);

        item.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
    }
});

app.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log(req.body);
    
    Item.findByIdAndUpdate(id, req.body)
    .then((result) => {
        res.json({redirect: '/'});
    })
    .catch((err) => {
         console.log(err);
    });
 });
 
app.delete('/:id', (req, res) => {
    let id = req.params.id;

    Item.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/'});
    })
    .catch((err) => {
        console.log(err);
    });
});

app.use((req, res) => {
    res.status(404).render('wrong-link');
});
