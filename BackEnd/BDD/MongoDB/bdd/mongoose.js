var mongoose = require('mongoose');


const bddConnect = (db) => {
    const uri = 'mongodb+srv://admin:installation@cluster0.i9ffxx2.mongodb.net/'+db;
    mongoose.connect(uri,
        { useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: db
        })
      .then(() => console.log('Connexion à MongoDB '+db+' réussie !'))
      .catch(() => console.log('Connexion à MongoDB '+db+' échouée !'));
    
}

module.exports = bddConnect ;