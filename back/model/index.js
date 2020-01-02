
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    bookName:  String,
    bookAuther: String,
    bookType:   String,
    bookDesc: String,
    bookPrice:Number,
    token:String
  });


  module.exports=mongoose.model('Book',userSchema);