var express = require('express');
var router = express.Router();
var notificationModel = require ('../models/notificationSchema');

//post to collection
router.post('/post', function(req, res, next) {

    const type_userNotification  = req.body.type_user ;
    const id_userNotification = req.body.id_user ;
    const messageNotification = req.body.message ;
 
    const newnotification = new notificationModel({ type_user:type_userNotification , id_user : id_userNotification , message:messageNotification   }) ;
    newnotification.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , menu: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});


// get all from collection
router.get('/getall', function(req, res, next) {
    notificationModel.find()
     .then(notificationModel => res.status(200).json(notificationModel))
     .catch(error => res.status(400).json({ error }));
});


// //get by id from collection
// router.get('/get/:id', function(req, res, next) {
//     var id= req.params.id;
//     notificationModel.findById(id)
//      .then(notificationModel => res.status(200).json(notificationModel))
//      .catch(error => res.status(400).json({ error }));
// });

// // delete by id from collection
// router.delete('/delete/:id', function(req, res, next) {
//     var id= req.params.id;
//     notificationModel.findByIdAndRemove(id)
//      .then(notificationModel => res.status(200).json(notificationModel))
//      .catch(error => res.status(400).json({ error }));
// });

// // update by id to collection
// router.put('/put/:id', function(req, res, next) {

//     const id =  req.params.id ;
//     const update = { id_livraison : id_livraisonDelivery ,id_client : id_clientDelivery,id_livreur : id_livreurDelivery , status :statusDelivery };

//     notificationModel.findByIdAndUpdate(id, update)
//       .then(notificationModel => res.status(202).json(notificationModel))
//       .catch(error => res.status(400).json({ error }));
// });


module.exports = router;
