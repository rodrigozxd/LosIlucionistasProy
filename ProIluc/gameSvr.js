// importamos los paquetes necesarios
var express 	= require('express');		// importamos express
var app 		= express();				// instanciamos una aplicación
var bodyParser	= require('body-parser');

// configuramos nuestra app para usar bodyParser()
// el cual nos permitirá obtener data enviada por POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9001		// configuramos nuestro puerto

// ROUTES FOR OUR API
// ==========================================================================
var router = express.Router();			// obtenemos una instancia del
									// enrutador de express

// Ruta de prueba para ver si todo funciona (accesible por GET http://localho
// st:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Bienvenido estas en la configuracion de Tu juego' });
});


//MAPAS
var mapasRouter = require('./routes/mapas');
router.use('/mapas', mapasRouter);
//VILLANOS
var villanosRouter = require('./routes/villanos');
router.use('/villanos', villanosRouter);
//USUARIOS
var usuariosRouter = require('./routes/usuarios');
router.use('/usuarios', usuariosRouter);
//ITEMS
var itemsRouter = require('./routes/items');
router.use('/items', itemsRouter);

// REGISTRAMOS NUESTRAS RUTAS --------------------------------
// todas las rutas tendrán el prefijo /api
app.use('/api', router);

// Nos conectamos a nuestra base de datos
var mongoose	= require('mongoose');
mongoose.connect('mongodb://localhost:27017/Juegos1');
mongoose.Promise = global.Promise;

// INICIAMOS EL SERVIDOR
// ==========================================================================
app.listen(port);
console.log('La magia sucede en el puerto ' + port);
