const express = require('express')
const morgan = require ('morgan')
const cors = require ('cors')



const app = express()


require('./database')



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


//RUTAS
app.use('/socio', require('./src/routes/Socio.route'))
app.use('/empleado', require('./src/routes/Empleado.route'))
app.use('/cotizacion', require('./src/routes/Cotizacion.route'))
app.use('/reserva', require('./src/routes/Reserva.route'))




//PUERTO
app.set('puerto', process.env.PORT || 4000); 
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port ' + app.get ('puerto')); 
});
