const express = require("express");
const app = express();
const router = require('../../Users');

router.get('/', (req, res)=> {
   res.json(users);
})

router.get('/:id', (req, res) => {
   let found = users.some(user => user.id === parseInt(req.params.id));

   if(found){
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
   }
   else{
      res.status(400).json({msg: `No users with the id of ${req.params.id}` });
   }
})

router.post('/', (req, res) => {
   res.send(req.body);
})




module.exports = router;
