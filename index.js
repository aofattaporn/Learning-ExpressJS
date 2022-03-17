const express = require('express'); 
const path = require('path');
const users = require('./Users');
const logger = require('./middleware/logging');
const app = express();



// Init Middleware 
app.use(logger);


// static folder 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/users', (req, res)=> {
   res.json(users);
})

app.get('/api/user/:id', (req, res) => {
   res.json(users.filter(user => user.id === parseInt(req.params.id)));
})

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