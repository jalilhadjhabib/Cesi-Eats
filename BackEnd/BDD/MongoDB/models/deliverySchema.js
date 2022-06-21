var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const deliverySchema = new mongoose.Schema({
    id_livraison : Number,
    id_client : Number,
    id_livreur : Number,
    status : String
},
{
    versionKey: false
}
);

const deliveryModel = mongoose.model('delivery' , deliverySchema);

module.exports  = deliveryModel ;