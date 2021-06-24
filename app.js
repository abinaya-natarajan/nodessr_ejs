const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.listen(port, () => {console.log(`Listening to port ${port}`)});

app.get('/', (req, res) => {
    const data = [
        {title: 'EJS', desc: 'Lorem Ipsum available'},
        {title: 'React', desc: 'Lorem Ipsum available'},
        {title: 'Node', desc: 'Lorem Ipsum available'},
        {title: 'Devops', desc: 'Lorem Ipsum available'}
    ]

    res.render('index', { title: 'Home', details: data});
});

app.get('/about-us', (req, res) => {
    res.render('about', { title: 'About Us'})
});

app.get('/terms', (req, res) => {
    res.render('terms', { title: 'Terms & Conditions'})
});



