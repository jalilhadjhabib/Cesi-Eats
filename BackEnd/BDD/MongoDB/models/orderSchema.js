var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const orderSchema = new mongoose.Schema({
    id_commande : Number,
    n_commande : Number,
    date : Date,
    total : Number,
    payementMethod : String,
},
{
    versionKey: false
}
);

const orderModel = mongoose.model('order' , orderSchema);

module.exports  = orderModel ;