var express = require('express');
var router = express.Router();
var deliveryModel = require ('../models/deliverySchema');

//post to collection
router.post('/post', function(req, res, next) {

    const id_livraisonDelivery  = req.body.id_livraison ;
    const id_clientDelivery = req.body.id_client ;
    const id_livreurDelivery = req.body.id_livreur ;
    const statusDelivery = req.body.status ;

    const newDelivery = new deliveryModel({ id_livraison : id_livraisonDelivery ,id_client : id_clientDelivery,id_livreur : id_livreurDelivery , status :statusDelivery }) ;
    newDelivery.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , menu: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});

//get by id from collection
router.get('/get/:id', function(req, res, next) {
    var id= req.params.id;
    deliveryModel.findById(id)
     .then(deliveryModel => res.status(200).json(deliveryModel))
     .catch(error => res.status(400).json({ error }));
});

// get all from collection
router.get('/getall', function(req, res, next) {
    deliveryModel.find()
     .then(deliveryModel => res.status(200).json(deliveryModel))
     .catch(error => res.status(400).json({ error }));
});

// delete by id from collection
router.delete('/delete/:id', function(req, res, next) {
    var id= req.params.id;
    deliveryModel.findByIdAndRemove(id)
     .then(deliveryModel => res.status(200).json(deliveryModel))
     .catch(error => res.status(400).json({ error }));
});

// update by id to collection
router.put('/put/:id', function(req, res, next) {

    const id =  req.params.id ;
    const update = { id_livraison : id_livraisonDelivery ,id_client : id_clientDelivery,id_livreur : id_livreurDelivery , status :statusDelivery };

    deliveryModel.findByIdAndUpdate(id, update)
      .then(deliveryModel => res.status(202).json(deliveryModel))
      .catch(error => res.status(400).json({ error }));
});


module.exports = router;
