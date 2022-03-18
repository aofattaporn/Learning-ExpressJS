const express = require('express'); 
const path = require('path');
const logger = require('./middleware/logging');

const app = express();

// Init Middleware 
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/api/users'));

// static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/file', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/s', (req, res) => {
   res.json({
      data: "Hello world"
   });

   console.log("hello world");
})

const PORT = process.env.PORT || 3000; 

app.listen(PORT, ()=> console.log('server is running on port ${PORT'));