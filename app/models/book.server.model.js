var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: { 
    type : String,
    trim : true,
  },
  description: String,
  author: String,
  language: String,
  theme: String,
  edition: String,

});

mongoose.model('Book', BookSchema);