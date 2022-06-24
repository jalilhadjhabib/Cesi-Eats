var mongoose = require ('mongoose');
var bddConnect = require('../connexion/mongoose');

bddConnect('CESIEATS');

const notificationSchema = new mongoose.Schema({
    type_user : String,
    id_user : String,
    message : String,
},
{
    versionKey: false
}
);

const notificationModel = mongoose.model('notification' , notificationSchema);

module.exports  = notificationModel ;