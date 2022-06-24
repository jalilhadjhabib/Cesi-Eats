var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const orderSchema = new mongoose.Schema({
    id_commande : Number,
    ids_article :  {
        type : Array
    },
    id_restaurant : String,
    id_client : String,
    id_livreur : String,
    statut_restaurant : String,
    statut_livreur : String,
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