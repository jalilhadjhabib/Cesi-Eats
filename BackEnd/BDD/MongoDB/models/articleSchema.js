var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const articleSchema = new mongoose.Schema({
    id_article : Number,
    name : String,
    picture : { path: String, contentType: String },
    price : String,
    id_menu : String,
},
{
    versionKey: false
}
);

const articleModel = mongoose.model('article' , articleSchema);

module.exports  = articleModel ;