var express = require('express');
var router = express.Router();
var menuModel = require ('../models/menuSchema');
var path = require('path');
let formidable = require('express-formidable');  

router.use(formidable({
    encoding: 'utf-8',
    uploadDir: path.join('uploads'),
    multiples: false,
    keepExtensions: true// req.files to be arrays of files
  }));


//post to collection
router.post('/post', function(req, res, next) {

    console.log('Files '+JSON.stringify(req.files.picture.path));
    console.log('Fields '+JSON.stringify(req.fields));

    const pictureMenu = {
        path:  req.files.picture.path,
        contentType: 'image/png'
    } ;
    const nameMenu  = req.fields.name ;
    const priceMenu = req.fields.price ;
    const id_restaurantMenu = req.fields.id_restaurant ;

    const newMenu = new menuModel({ name : nameMenu ,
        picture :pictureMenu ,
        price : priceMenu , id_restaurant: id_restaurantMenu }) ;
    newMenu.save(function (err, doc){
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
    menuModel.findById(id)
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});

// get all from collection
router.get('/getall', function(req, res, next) {
    menuModel.find()
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});

// delete by id from collection
router.delete('/delete/:id', function(req, res, next) {
    var id= req.params.id;
    menuModel.findByIdAndRemove(id)
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});


// update by id to collection
router.put('/put/:id', function(req, res, next) {

    const id =  req.params.id ;
    console.log(typeof(req.files));
    var pictureMenu = {};
    if( 
        Object.keys(req.files).length !== 0  
    ){ 
          pictureMenu = {
            path:  req.files.picture.path,
            contentType: 'image/png'
        } ;
    }else{
          pictureMenu = {};

    }
    const nameMenu  = req.fields.name ;
    const priceMenu = req.fields.price ;
    console.log(pictureMenu);
    const update = { name : nameMenu ,picture : pictureMenu ,price : priceMenu    } ;
    if(Object.keys(pictureMenu).length === 0 ){
        delete update.picture ;
    }
    menuModel.findByIdAndUpdate(id, update)
    .then(menuModel => res.status(202).json(menuModel))
    .catch(error => res.status(400).json({ error }));
});

  
 

module.exports = router;
