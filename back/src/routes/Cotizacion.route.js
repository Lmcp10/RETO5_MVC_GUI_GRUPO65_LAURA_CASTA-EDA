const {Router}=require('express');
const router=Router()
const CotizacionCtrl= require('../controllers/Cotizacion.controller')


router.post('/nueva-cotizacion', CotizacionCtrl.crearCotizacion)
router.get('/listar-cotizaciones', CotizacionCtrl.listar)
router.get('/listar-cotizacion/:id', CotizacionCtrl.listarId)
router.delete('/eliminar-cotizacion/:id', CotizacionCtrl.eliminarCotizacion)
router.put('/actualizar-cotizacion/:id',  CotizacionCtrl.actualizarCotizacion)
router.get('/buscar-cotizacion/:documento', CotizacionCtrl.buscarCotizacion)

module.exports=router;