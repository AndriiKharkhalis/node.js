const express = require('express');
const { engine } = require('express-handlebars');
const DBusers = require('./dataBase/users');
const DBcars = require('./dataBase/cars');


const app = express();

app.engine('.hbs', engine({ defaultLayout: false }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/welcome', (req, res) => {

   res.render('welcome');
})

app.get('/users', (req, res) => {

   res.render('users', {DBusers})
})

app.get('/users/:userIndex', (req, res) => {

   const { userIndex } = req.params;

   res.json(DBusers[userIndex] || 'User not found')
})

app.get('/cars', (req, res) => {
   
   res.render('cars', {DBcars})
})

app.get('/cars/:carsIndex', (req, res) => {

   const { carsIndex } = req.params;

   res.json(DBcars[carsIndex] || 'Car not found')
})

app.listen(3000, () => {
   console.log('App listen 3000')
});