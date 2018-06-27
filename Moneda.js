conn = new Mongo();
db = conn.getDB("moneda");

db.personas_personalizados.insert(
  [
   {_id: 1,nombre: 'Timo', habilidad: 'Trampa', genero: 'M', Precio: 95000 ,Precio_Vip:'12', tipo_moneda: 'Berris',tipo_moneda_vip: 'Diamante' },
   {_id: 2,nombre: 'Keyla', habilidad: 'Camuflaje', genero: 'F',  Precio: 75000 ,Precio_Vip:'12', tipo_moneda: 'Berris',tipo_moneda_vip: 'Diamante' },
   {_id: 3,nombre: 'Dash', habilidad: 'Devorador', genero: 'M', Precio: 10000 , Precio_Vip:'12',tipo_moneda: 'Berris',tipo_moneda_vip: 'Diamante'  },
   {_id: 4,nombre: 'Anonymo', habilidad: 'Bomba-Asesina', genero: 'M',  Precio: 4500  ,Precio_Vip:'12', tipo_moneda: 'Berris', tipo_moneda_vip: 'Diamante' },
   {_id: 5,nombre: 'Poczi', habilidad: 'Duplicar', genero: 'F', Precio: 10500 ,Precio_Vip:'12', tipo_moneda: 'Berris' ,tipo_moneda_vip: 'Diamante' },
   {_id: 6,nombre: 'Mimir', habilidad: 'Escudo', genero: 'F', Precio: 9500 ,Precio_Vip:'12', tipo_moneda: 'Berris',tipo_moneda_vip: 'Diamante'  },
   {_id: 7,nombre: 'Namuck', habilidad: 'Lanzallamas', genero: 'M', Precio: 11000 , Precio_Vip:'12',tipo_moneda: 'Berris' ,tipo_moneda_vip: 'Diamante' },
   {_id: 8,nombre: 'Roderick', habilidad: 'Saltar', genero: 'M',  Precio: 25000 , Precio_Vip:'12',tipo_moneda: 'Berris',tipo_moneda_vip: 'Diamante' }
 ]);

db.Monedas.insert(
  [
   {_id: 1,nombre: 'Berris', dinero_real: 1.0},
   {_id: 2,nombre: 'Diamantes', dinero_real: 10.0},

 ]);


db.Colores.insert(
  [
   {_id: 1,color: 'Blanco',  Precio: 800  ,Precio_Vip:'5',},
   {_id: 2,color: 'Verde', Precio: 500  ,Precio_Vip:'5',},
   {_id: 2,color: 'Morado',  Precio: 750  ,Precio_Vip:'4',}
 ]);



