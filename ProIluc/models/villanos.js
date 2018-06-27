const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const villanosSchema  = new Schema({
  _id : Number,
  nombre : String,
  clase : String,
  estilo : String,
  ataque : [
    {
      tipo_ataque : String,
      daño_ataque : Number
    }
  ],
  vida : Number,
  defensa : Number,
  velocidad : Number
});

const villanosModel = mongoose.model('villanos', villanosSchema);

module.exports = {
  create: (req,res,next)=>{
      const villano = new villanosModel({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        clase: req.body.clase,
        estilo: req.body.estilo,
        ataque: [
          {
            tipo_ataque: req.body.tipo_ataque,
            daño_ataque: req.body.daño_ataque
          }
        ],
        vida: req.body.vida,
        defensa: req.body.defensa,
        velocidad: req.body.velocidad
      });
      villano
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'villano creado con exito',
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
     villanosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Villano Actualizado'
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
         .select('_id nombre clase estilo ataque vida defensa velocidad')
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
    villanosModel.find()
      .select('_id nombre clase estilo ataque vida defensa velocidad')
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
      villanosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Villano eliminado'
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
