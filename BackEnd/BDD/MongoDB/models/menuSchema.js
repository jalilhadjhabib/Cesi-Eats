var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const menuSchema = new mongoose.Schema({
    id_menu : Number,
    name : String,
    picture : { path: String, contentType: String }
    ,
    price : String,
    id_restaurant : Number,
},
{
    versionKey: false
}
);

const menuModel = mongoose.model('menu' , menuSchema);

module.exports  = menuModel ;