var express = require('express');
var router = express.Router();
var register = require("../models/Register")
/* GET home page. */
  router.get('/register', function(req, res, next) {
  console.log(req);
  register.find((error,registers)=>{
   if(error){
     res.status(500).json({message: "Error del sistema"});
   }
   else if (registers)
   {
    res.status(200).json(registers);
   }
   else{
     res.status(404).json({message: "No hay registros"});
   }
  });
});



module.exports = router;
