//creacion de servidor
const express = require ('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);
//middlewares me deja ver lo que llega al servidor por consola, depende de los parametros de creacion de morgan me da ya sea descripccion detallada con combined o si lo queremos corto podemos utilizar un dev
app.use(morgan('dev'));

//me acepta datos desde input de formulario
app.use(express.urlencoded({extended:false}));
//me permite entender y recibir Json
app.use(express.json());

//llamado del router
app.use(require('./routes/routes'));
// app.use(require('./routes/example'));


//start serve
app.listen(app.get('port'),()=>{
	
});