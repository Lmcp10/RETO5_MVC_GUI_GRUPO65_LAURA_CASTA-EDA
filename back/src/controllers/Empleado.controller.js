const EmpleadoCtrl={};

const Empleado= require('../models/Empleado.models');

const bcrypt = require('bcryptjs');

const jwt=require('jsonwebtoken');


//CREAR EMPLEADO

EmpleadoCtrl.crearEmpleado= async(req,res)=>{

    const{nombre,apellido,telefono,correo,documento,contraseña,rol,user}= req.body;

    const NuevoEmpleado = new Empleado({
        nombre,
        apellido,
        telefono,
        correo,
        documento,
        contraseña,
        rol,
        user
    })

    // const respuesta = await NuevoEmpleado.save()
    // res.json({
    //     mensaje: 'Empleado Creado',
    //     respuesta
    // })


   
    const userEmpleado= await Empleado.findOne ({user: user})
    if(userEmpleado){
        res.json({
            mensaje: 'El usuario  ya existe'
        })
    }
    else{
        NuevoEmpleado.contraseña= await bcrypt.hash(contraseña,10)
        const token = jwt.sign({_id:NuevoEmpleado._id},'secreta')
        await NuevoEmpleado.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoEmpleado._id,
            nombre: NuevoEmpleado.nombre,
            token

        })
    }
}


//LISTAR TODOS EMPLEADOS

EmpleadoCtrl.listar=async(req,res)=>{
    const respuesta = await Empleado.find()
    res.json(respuesta)
}

//BUSCAR EMPLEADO POR ID

EmpleadoCtrl.listarId=async(req, res)=>{
    const id = req.params.id
    const respuesta = await Empleado.findById({_id:id})
    res.json(respuesta)
}

//ELIMINAR EMPLEADO 
EmpleadoCtrl.eliminarEmpleado = async(req,res)=>{
    const id=req.params.id
    await Empleado.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Empleado Eliminado'
    })
}



//ACTUALIZAR EMPLEADO 

EmpleadoCtrl.actualizarEmpleado = async(req,res)=>{
    const id = req.params.id
    await Empleado.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Empleado actualizado con exito'
    })

}


//BUSCAR EMPLEADO POR APELLIDO

EmpleadoCtrl.buscarEmpleado = async(req, res)=>{
    const apellido = req.params.apellido
    const respuesta = await Empleado.find({apellido: {$regex :".*" +apellido+ ".*"}})
    res.json(respuesta)
}


//LOGIN
EmpleadoCtrl.login = async(req, res)=>{
    const {user, contraseña} = req.body 
    const empleado = await Empleado.findOne({user:user})
    if(!empleado){
        return res.json({
            mensaje: 'Usuario Incorrecto'
        })
    }

    const match = await bcrypt.compare(contraseña, empleado.contraseña)
    if(match){
        const token = jwt.sign({_id: empleado._id},'secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: empleado._id,
            nombre: empleado.nombre,
            token
        })
    }
    // if(!empleado && !match){
    //     res.json({
    //         mensaje: 'ambos incorrectos'
    //     })
    // }
    else{
        res.json({
            mensaje: 'Contraseña Incorrecta'
        })
    }
}

module.exports= EmpleadoCtrl