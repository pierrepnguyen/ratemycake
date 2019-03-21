const mongoose = require('mongoose');
const connect = 'mongodb://localhost/Cake';
mongoose.connect(connect, {useNewUrlParser:true});

const ratingSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    default: 5
  },
  comment: {
    type: String, 
    required: true,
    default: ""
  }
},{timestamps:true})

const CakeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  rating: [ratingSchema]
},{timestamps:true})

const Cake = mongoose.model('Cake', CakeSchema),
  Rating = mongoose.model('Rating', ratingSchema)

module.exports = {Cake, Rating};