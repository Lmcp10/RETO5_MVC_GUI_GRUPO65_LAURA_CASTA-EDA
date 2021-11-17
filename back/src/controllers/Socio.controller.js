const SocioCtrl={};

const Socio= require('../models/Socio.models');

const bcrypt = require('bcryptjs');

const jwt=require('jsonwebtoken');

//CREAR SOCIO
SocioCtrl.crearSocio= async(req,res)=>{
    const {nombre, apellido, telefono, correo, documento, contraseña, rol  }= req.body;

    const NuevoSocio= new Socio({
        nombre, 
        apellido, 
        telefono, 
        correo, 
        documento, 
        contraseña, 
        rol
    })

    const documentoSocio= await Socio.findOne ({documento:documento})
    if(documentoSocio){
        res.json({
            mensaje: 'El documento ya existe'
        })
    }
    else{
        NuevoSocio.contraseña= await bcrypt.hash(contraseña,10)
        const token = jwt.sign({_id:NuevoSocio._id},'secreta')
        await NuevoSocio.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoSocio._id,
            nombre: NuevoSocio.nombre,
            token

        })
    }
}


//LISTAR TODOS LOS SOCIOS

SocioCtrl.listar=async(req,res)=>{
    const respuesta = await Socio.find()
    res.json(respuesta)
}


//LISTAR SOCIO POR DOCUMENTO
SocioCtrl.listarDoc=async(req, res)=>{
    const documento = req.params.documento
    const respuesta = await Socio.findOne({documento:documento})
    res.json(respuesta)
}

//ELIMINAR SOCIO 
SocioCtrl.eliminarSocio = async(req,res)=>{
    const id=req.params.id
    await Socio.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Socio Eliminado'
    })
}

//ACTUALIZAR SOCIO 

SocioCtrl.actualizarSocio = async(req,res)=>{
    const id = req.params.id
    await Socio.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Socio actualizado con exito'
    })
}

//BUSCAR SOCIO POR DOCUMENTO

SocioCtrl.buscarSocio = async(req, res)=>{
    const documento = req.params.documento
    const respuesta = await Socio.find({documento: {$regex :".*" +documento+ ".*"}})
    res.json(respuesta)
}



//LOGIN
SocioCtrl.login = async(req, res)=>{
    const {documento, contraseña} = req.body 
    const socio = await Socio.findOne({documento:documento})
    if(!socio){
        return res.json({
            mensaje: 'Documento Incorrecto'
        })
    }

    const match = await bcrypt.compare(contraseña, socio.contraseña)
    if(match){
        const token = jwt.sign({_id: socio._id},'secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: socio._id,
            nombre: socio.nombre,
            token
        })
    }
    // if(!socio && !match){
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
module.exports= SocioCtrl