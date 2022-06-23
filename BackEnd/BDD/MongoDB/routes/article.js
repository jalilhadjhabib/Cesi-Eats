var express = require('express');
var router = express.Router();
var articleModel = require ('../models/articleSchema');
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

    const pictureArticle = {
        path:  req.files.picture.path,
        contentType: 'image/png'
    } ;
    const nameArticle  = req.fields.name ;
    const priceArticle = req.fields.price ;
    const id_menuArticle = req.fields.id_menu;
    const newarticle = new articleModel({ name : nameArticle ,picture : pictureArticle ,price : priceArticle , id_menu : id_menuArticle   }) ;
    newarticle.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , article: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});

//get by id from collection
router.get('/get/:id', function(req, res, next) {
    var id= req.params.id;
    articleModel.findById(id)
     .then(articleModel => res.status(200).json(articleModel))
     .catch(error => res.status(400).json({ error }));
});

router.get('/getbymenu/:id', function(req, res, next) {
    var id= req.params.id;
    articleModel.find( {id_menu : id} )
     .then(articleModel => res.status(200).json(articleModel))
     .catch(error => res.status(400).json({ error }));
});

// get all from collection
router.get('/getall', function(req, res, next) {
    articleModel.find()
     .then(articleModel => res.status(200).json(articleModel))
     .catch(error => res.status(400).json({ error }));
});

// delete by id from collection
router.delete('/delete/:id', function(req, res, next) {
    var id= req.params.id;
    articleModel.findByIdAndRemove(id)
     .then(articleModel => res.status(200).json(articleModel))
     .catch(error => res.status(400).json({ error }));
});

// update by id to collection
router.put('/put/:id', function(req, res, next) {

    const id =  req.params.id ;
    console.log(typeof(req.files));
    var pictureArticle = {};
    if( 
        Object.keys(req.files).length !== 0  
    ){ 
          pictureArticle = {
            path:  req.files.picture.path,
            contentType: 'image/png'
        } ;
    }else{
          pictureArticle = {};

    }
    const nameArticle  = req.fields.name ;
    const priceArticle = req.fields.price ;
    const id_menuArticle = req.fields.id_menu;
    console.log(pictureArticle);
    const update = { name : nameArticle ,picture : pictureArticle ,price : priceArticle , id_menu : id_menuArticle   } ;
    if(Object.keys(pictureArticle).length === 0 ){
        delete update.picture ;
    }
    articleModel.findByIdAndUpdate(id, update)
      .then(articleModel => res.status(202).json(articleModel))
      .catch(error => res.status(400).json({ error }));
});


module.exports = router;
