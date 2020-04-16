const mongoose = require('mongoose');const Schema = mongoose.Schema;
const myshiftSchema = new Schema({
    name: {
       type: String,
       required: true
    },
    shift: {
       type: Number,
       required: true
    },
    hours: {
       type: String,
       required: true
   }
}, {
});var myshift = mongoose.model('myshift', myshiftSchema);
module.exports = {myshifts, myshiftSchema};