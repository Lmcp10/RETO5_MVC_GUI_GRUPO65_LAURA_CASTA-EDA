const {Router}=require('express');
const router=Router()
const EmpleadoCtrl= require('../controllers/Empleado.controller');
// const Auth = require('../Helper/Auth');

router.post('/nuevo-empleado', EmpleadoCtrl.crearEmpleado)
router.post('/login',  EmpleadoCtrl.login)
router.get('/listar-empleados', EmpleadoCtrl.listar)
router.get('/listar-empleado/:id', EmpleadoCtrl.listarId)
router.delete('/eliminar-empleado/:id', EmpleadoCtrl.eliminarEmpleado)
router.put('/actualizar-empleado/:id',  EmpleadoCtrl.actualizarEmpleado)
router.get('/buscar-empleado/:apellido', EmpleadoCtrl.buscarEmpleado)

module.exports=router;