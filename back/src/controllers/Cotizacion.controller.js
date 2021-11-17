const CotizacionCtrl={};
const Cotizacion= require('../models/Cotizacion.models');


//CREAR COTIZACION 
CotizacionCtrl.crearCotizacion= async(req,res)=>{

    const{nombre,apellido,documento,correo,telefono,tipo_evento,num_personas,area,fecha,hora,comida, bebidas, grupo_musical, adicionales}= req.body;

    const NuevaCotizacion = new Cotizacion({
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
        adicionales
    })

    const respuesta = await NuevaCotizacion.save()
    res.json({
        mensaje: 'Cotización Creada',
        respuesta
    })
}

//LISTAR TODOS LAS COTIZACIONES

CotizacionCtrl.listar=async(req,res)=>{
    const respuesta = await Cotizacion.find()
    res.json(respuesta)
}


//BUSCAR COTIZACION POR ID

CotizacionCtrl.listarId=async(req, res)=>{
    const id = req.params.id
    const respuesta = await Cotizacion.findById({_id:id})
    res.json(respuesta)
}


//ELIMINAR COTIZACION 
CotizacionCtrl.eliminarCotizacion= async(req,res)=>{
    const id=req.params.id
    await Cotizacion.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Cotizacion Eliminada'
    })
}

//ACTUALIZAR COTIZACION 

CotizacionCtrl.actualizarCotizacion = async(req,res)=>{
    const id = req.params.id
    await Cotizacion.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Cotizacion actualizada'
    })

}



//BUSCAR COTIZACION POR DOCUMENTO

CotizacionCtrl.buscarCotizacion = async(req, res)=>{
    const documento = req.params.documento
    const respuesta = await Cotizacion.find({documento: {$regex :".*" +documento+ ".*"}})
    res.json(respuesta)
}

module.exports= CotizacionCtrl