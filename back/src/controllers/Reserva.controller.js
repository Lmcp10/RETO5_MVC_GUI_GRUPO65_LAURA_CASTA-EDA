const ReservaCtrl={};
const Reserva= require('../models/Reserva.models');


//CREAR COTIZACION 
ReservaCtrl.crearReserva= async(req,res)=>{

    const{nombre,apellido,documento,correo,telefono,tipo_evento,num_personas,area,fecha,hora,comida, bebidas, grupo_musical, adicionales, socio}= req.body;

    const NuevaReserva = new Reserva({
        nombre,
        apellido,
        documento,
        correo,
        telefono,
        tipo_evento,
        num_personas,
        area,
        fecha,
        hora,
        comida,
        bebidas,
        grupo_musical,
        adicionales,
        socio
    })

    const respuesta = await NuevaReserva.save()
    res.json({
        mensaje: 'Reserva Creada',
        respuesta
    })
}

//LISTAR TODOS LAS RESERVAS

ReservaCtrl.listar=async(req,res)=>{
    const respuesta = await Reserva.find()
    res.json(respuesta)
}


//BUSCAR RESERVA POR ID

ReservaCtrl.listarId=async(req, res)=>{
    const id = req.params.id
    const respuesta = await Reserva.findById({_id:id})
    res.json(respuesta)
}

//LISTAR LAS RESERVAS DE UN SOCIO

ReservaCtrl.listarEmpleados_Jefe=async(req, res)=>{
    const id=req.params.id
    const respuesta = await Reserva.find({socio:id})
    res.json(respuesta)

}

//ELIMINAR COTIZACION 
ReservaCtrl.eliminarReserva= async(req,res)=>{
    const id=req.params.id
    await Reserva.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Reserva Eliminada'
    })
}

//ACTUALIZAR COTIZACION 

ReservaCtrl.actualizarReserva = async(req,res)=>{
    const id = req.params.id
    await Reserva.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Reserva actualizada'
    })

}



//BUSCAR COTIZACION POR DOCUMENTO

ReservaCtrl.buscarReserva = async(req, res)=>{
    const documento = req.params.documento
    const respuesta = await Reserva.find({documento: {$regex :".*" +documento+ ".*"}})
    res.json(respuesta)
}

module.exports= ReservaCtrl