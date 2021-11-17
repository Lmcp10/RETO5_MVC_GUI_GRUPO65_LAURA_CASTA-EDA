const {Router}=require('express');
const router=Router()
const SocioCtrl= require('../controllers/Socio.controller');

router.post('/nuevo-socio',SocioCtrl.crearSocio)
router.post('/login', SocioCtrl.login)
router.get('/listar-socios', SocioCtrl.listar)
router.get('/listar-socio/:documento', SocioCtrl.listarDoc)
router.delete('/eliminar-socio/:id', SocioCtrl.eliminarSocio)
router.put('/actualizar-socio/:id',  SocioCtrl.actualizarSocio)
router.get('/buscar-socio/:documento', SocioCtrl.buscarSocio)



module.exports=router;