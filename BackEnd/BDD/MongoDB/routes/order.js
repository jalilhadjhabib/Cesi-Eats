var express = require('express');
var router = express.Router();
var orderModel = require ('../models/orderSchema');


//post to collection
router.post('/post', function(req, res, next) {

    const id_commandeOrder  = req.body.id_commande ;
    const ids_articleOrder = req.body.ids_article;
    const n_commandeOrder = req.body.n_commande ;
    const dateOrder = req.body.date ;
    const totalOrder = req.body.total ;
    const payementMethodOrder = req.body.payementMethod ;
    const id_restaurantOrder =  req.body.id_restaurant ;
    const id_clientOrder =  req.body.id_client ;
    const id_livreurOrder = null;
    const statut_restaurantOrder = 0;
    const statut_livreurOrder = 0;
    const newOrder = new orderModel({ id_commande: id_commandeOrder ,id_livreur : id_livreurOrder ,statut_restaurant : statut_restaurantOrder ,statut_livreur:  statut_livreurOrder , id_client : id_clientOrder , id_restaurant : id_restaurantOrder ,ids_article :ids_articleOrder ,  n_commande: n_commandeOrder , date: dateOrder , total: totalOrder , payementMethod: payementMethodOrder }) ;
    newOrder.save(function (err, doc){
        if(!err){ 
            res.status(201).json({response : true , order: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});

// //get to collection
// router.get('/get/:id', function(req, res, next) {

//     const id_commandeOrder  = req.body.id_commande ;
//     const n_commandeOrder = req.body.n_commande ;
//     const dateOrder = req.body.date ;
//     const totalOrder = req.body.total ;
//     const payementMethodOrder = req.body.payementMethod ;

//     const newOrder = new orderModel({ id_commande: id_commandeOrder , n_commande: n_commandeOrder , date: dateOrder , total: totalOrder , payementMethod: payementMethodOrder }) ;
//     newOrder.save(function (err, doc){
//         if(!err){ 
//             res.status(201).json({response : true , order: {statut :"created" , infos : doc   }});    
            
//         }else{
//             res.status(404).json({response : false , error :err});
//         }
//     });

// });

//get by id from collection
router.get('/get/:id', function(req, res, next) {
    var id= req.params.id;
    orderModel.findById(id)
     .then(orderModel => res.status(200).json(orderModel))
     .catch(error => res.status(400).json({ error }));
});

// get all from collection
router.get('/getall', function(req, res, next) {
    orderModel.find()
     .then(orderModel => res.status(200).json(orderModel))
     .catch(error => res.status(400).json({ error }));
});

// delete by id from collection
router.delete('/delete/:id', function(req, res, next) {
    var id= req.params.id;
    orderModel.findByIdAndRemove(id)
     .then(orderModel => res.status(200).json(orderModel))
     .catch(error => res.status(400).json({ error }));
});

// update by id to collection
router.put('/put/:id', function(req, res, next) {

    const id =  req.params.id ;
    const update = { id_commande: id_commandeOrder , n_commande: n_commandeOrder , date: dateOrder , total: totalOrder , payementMethod: payementMethodOrder };

    orderModel.findByIdAndUpdate(id, update)
      .then(orderModel => res.status(202).json(orderModel))
      .catch(error => res.status(400).json({ error }));
});
router.put('/updateStateRestaurateurOrder/:id', function(req, res, next) {

    const id =  req.params.id ;
    const update = { statut_restaurant : 1 };

    orderModel.findByIdAndUpdate(id, update)
      .then(orderModel => res.status(202).json(orderModel))
      .catch(error => res.status(400).json({ error }));
});

router.get('/getAcceptedRestaurantOrder/:state', function(req, res, next) {
    var filtre=req.params.state;
    orderModel.find( {statut_restaurant : { $regex: filtre,$options: 'i' }})
    .then(orderModel => res.status(202).json(orderModel))
    .catch(error => res.status(400).json({ error }));
});
router.put('/updateStateLivreurOrder/:id', function(req, res, next) {
    var state = req.body.state;
    var id_livreur = req.body.id_livreur;
    const update = {statut_livreur : state , id_livreur : id_livreur};
    var id = req.params.id;
    orderModel.findByIdAndUpdate(id, update)
    .then(orderModel => res.status(202).json(orderModel))
    .catch(error => res.status(400).json({ error }));
});
module.exports = router;
