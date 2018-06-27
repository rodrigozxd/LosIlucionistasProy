const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var carrosSchema = new Schema({
  nombre : {
    type : String,
    required :true
  },
  vidas : {
    type : Number,
    max : 12,
    required :true
  },
  defensa : {
    type : Number,
    min : 0,
    max : 5,
    required :true
  },
  ataque : {
    type : Number,
    min : 2,
    required :true
  },
  velocidad : {
    type : Number,
    min : 2,
    required :true
  },
  precio : {
    type : Number,
    min : 0,
    required :true
  },
  habilidad : {
    type : String,
    required :true
  },
  diseño : {
    type : String,
    required :true
  },
  color : String
});

const usuariosSchema  = new Schema({
  _id : Number,
  nombre : {
    type :  String,
    required : true
  },
  Nusuario : {
    type : String,
    min : 5,
    max : 12,
    required : true,
    unique : true
  },
  contrasena : {
    type : String,
    required : true
  },
  correo : {
    type : String,
    min : 10,
    required : true
  },
  carros : [carrosSchema],
  monedas : Number,
  ScoreMax : Number,
});

const usuariosModel = mongoose.model('usuarios', usuariosSchema);

module.exports = {
  create: (req,res,next)=>{
      const usuario = new usuariosModel({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        Nusuario: req.body.Nusuario,
        contraceña: req.body.contraceña,
        correo: req.body.correo,
        carros: req.body.carros,
        monedas: req.body.monedas,
        ScoreMax: req.body.ScoreMax
      });
      usuario
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Usuario creado con exito',
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
     usuariosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Usuario Actualizado'
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
         .select('_id nombre Nusuario contraceña correo carros monedas ScoreMax')
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
    usuariosModel.find()
      .select('_id nombre Nusuario contraceña correo carros monedas ScoreMax')
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
      usuariosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Usuario eliminado'
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
