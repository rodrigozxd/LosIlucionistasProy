const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const mapasSchema  = new Schema({
  _id : Number,
  nombre : String,
  clima : String,
  dificultad : [
    {
      velocidad : Number,
      forma : String,
      especialidad : String
    }
  ]
});

const mapasModel = mongoose.model('mapas', mapasSchema);

module.exports = {
  create: (req,res,next)=>{
      const mapa = new mapasModel({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        clima: req.body.clima,
        dificultad: [
          {
            velocidad: req.body.velocidad,
            forma: req.body.forma,
            especialidad: req.body.especialidad
          }
        ]
      });
      mapa
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'mapa creado con exito',
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
     mapasModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'mapa Actualizado'
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
         .select('_id nombre clima dificultad')
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
    mapasModel.find()
      .select('_id nombre clima dificultad')
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
      mapasModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'mapa eliminado'
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
