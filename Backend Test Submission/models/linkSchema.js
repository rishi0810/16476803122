import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
  shortlink : {
    type : String, 
    required : true,
    unique : true
  },
  expiry : {
    type : String, 
    required : true
  },
  url : {
    type : String,
    required : true
  },
  shortcode : {
    type : String,
    required : true
  }
}, {timestamps : true});

const Link = mongoose.model('Link', LinkSchema);
export default Link