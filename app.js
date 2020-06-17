const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('home');
});
app.get('/home', (req,res) => {
    res.render('home');
});
app.get('/road', (req,res) => {
    res.render('roadsafety');
});
app.get('/rail', (req,res) => {
    res.render('rail');
});
app.get('/region', (req,res) => {
    res.render('region');
});
app.get('/regionI', (req,res) => {
    res.render('regionI');
});
app.get('/regionE', (req,res) => {
    res.render('regionE');
});
app.get('/chord', (req,res) => {
    res.render('chord');
});
app.get('/newcastle', (req,res) => {
    res.render('newcastle');
});
app.get('/ks', (req,res) => {
    res.render('ksair');
});
app.get('/glossary', (req,res) => {
    res.render('glossary');
});
app.get('/brocken', (req, res) => {
    res.render('brocken')
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));