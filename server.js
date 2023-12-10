// lOAD EXPRESS

const express = require('express');
const path = require('path');
const carsDB = require('./data/cars-db');
// const style = require('./views/cars/style.css')

// Create express application

const app = express();

// Configure the app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middlewear

// app.use

// Define a 'root' route directly on app

app.get('/', function(req, res) {
    res.redirect('/cars');
});

app.get('/home', function(req, res) {
    // Never begin the name of the template with a slash /
    res.render('home')
});

app.get('/cars', function(req, res) {
    const cars = carsDB.getAll();
    res.render('cars/car-list', { cars });
});

// app.get('/cars', function(req, res) {
//     res.render('cars/style');
// });


app.listen(3000, function() {
    console.log('Listening on port 3000');
});

