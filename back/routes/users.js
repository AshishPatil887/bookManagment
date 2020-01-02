var express = require('express');
var jwt = require('jsonwebtoken')


var router = express.Router();
 var Books=require('../model/index');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/bookeagister', function(req,res){
  console.log(req.body)
  var token = jwt.sign(req.body.bookName , 'shhhhh');
   books = new Books({   
    "bookName": req.body.bookName,
    "bookAuther":   req.body.bookAuther,
    "bookType": req.body.bookType,
    "bookDesc":req.body.bookDesc,
    "bookPrice":req.body.bookPrice,
    "token":token
  });
 
  console.log(token);
  books.save(req.body,function(err,data){
    if(err){res.json(err);}
    else{
 
      res.json({success:"record inserted successfully...!"});
    }
  })
})

router.get('/booksList',function(req,res){
  Books.find({ },function(err, data){
   if(err){
     console.log(err);
   }else{
     res.send(data)  
   }
});
})

router.post('/singlebook',function(req,res){
  Books.findOne({_id:req.body._id },function(err, data){
   if(err){
     console.log(err);
   }else{

    res.send(data);
   }
});
})

router.post('/updatebook',function(req,res){
  Books.findByIdAndUpdate({_id:req.body._id },{$set:req.body},{new: true, useFindAndModify: false},function(err, data){
   if(err){
     console.log(err);
   }else{

    res.send({success:"record updated successfully..!"});
 

    
   }
});
})



router.post('/deletebook',function(req,res){
  Books.findOneAndDelete({_id:req.body._id },function(err, data){
   if(err){
     console.log(err);
   }else{

    res.send({success:"record delete successfully."});
 

    
   }
});
});








module.exports = router;
