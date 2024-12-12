// index.js
const express = require('express');
const path=require('path')
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/home.html'));
});
app.get('/home.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/home.js'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/contact.html'));
});
app.get('/contact.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/contact.js'));
});

app.get('/everything.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/everything.html'));
});
app.get('/everything.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/everything.js'));
});

app.get('/everything2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/everything2.html'));
});
app.get('/everything2.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/everything2.js'));
});


app.get('/groceries.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/groceries.html'));
});
app.get('/groceries.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/groceries.js'));
});

app.get('/item.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/item.html'));
});
app.get('/item.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/item.js'));
});

app.get('/juice.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/juice.html'));
});
app.get('/juice.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/juice.js'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/login.html'));
});
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/login.html'));
});
app.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/login.js'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/register.html'));
});
app.get('/register.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/register.js'));
});

app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/profile.html'));
});

app.get('/whole.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views/whole.js'));
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
