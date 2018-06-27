const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemsSchema  = new Schema({
  _id : Number,
  nombre : String,
  tipo : String,
  habilidad : String,
  descirpcion : String
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = {
  create: (req,res,next)=>{
      const item = new itemsModel({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        habilidad: req.body.habilidad,
        descirpcion: req.body.descirpcion
      });
      item
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Item creado con exito',
                  data: {
                      ...result
                  }
              });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
   },

   update:(req,res,next) => {
     const id = req.params.id;
     let updateParams = {
         ...req.body
     };
     itemsModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Item Actualizado'
           });
         })
         .catch(err =>{
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
   },

   findOne: (req,res,next)=>{
     const id = req.params.id;
     Plan.findById(id)
         .select('_id nombre tipo habilidad descirpcion')
         .exec()
         .then(doc => {
             if(doc){
               res.status(200).json({
                   data: doc,
               });
             }else{
               res.status(404).json({message: 'No valid entry found for provided ID'});
             }
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
},
  find: (req,res,next) => {
    itemsModel.find()
      .select('_id nombre tipo habilidad descirpcion')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          data: docs.map(doc=>{
            return{
              ...doc["_doc"]
            };
          })
        };
        res.status(200).json(response);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({
          error:err
        });
      });
  },
  delete: (req,res,next)=>{
      const id = req.params.id;
      itemsModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Item eliminado'
              });
          })
          .catch(err =>{
              consoles.log(err);
              res.status(500).json({
                error: err
              });
          });
  }
  };
