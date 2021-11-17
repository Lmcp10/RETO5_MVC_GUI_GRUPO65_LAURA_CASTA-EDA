import React from 'react'
import MaterialTable from 'material-table'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const columns=[
    {
        title:'# Socio',
        field:'socio',
        type:'numeric'
    },
    {
        title:'Nombre',
        field:'nombre'
    },
    {
        title:'Apellido',
        field:'apellido'
    },
    {
        title:'Telefono',
        field:'telefono',
        type:'numeric'
    },
    {
        title:'Correo',
        field:'correo',
        type:'mail'
    },
    {
        title:'Documento',
        field:'documento',
        type:'numeric'
    },
    {
        title:'Contraseña',
        field:'contraseña'
    },
];
const data = [
    {socio: 145, nombre:'Andres', apellido: 'Jimenez', telefono: 3004556867, correo: 'andjim@gmail.com', documento: 1941356876, contraseña: 'AndrecitoGod123' },
    {socio: 187, nombre:'Felipe', apellido: 'Perez', telefono: 3016769557, correo: 'pelipe12@gmail.com', documento: 1001345876, contraseña: 'AndrecitGod123' },
    {socio: 109, nombre:'Maria', apellido: 'Leon', telefono: 3147658765, correo: 'Laria14@gmail.com', documento: 1000364876, contraseña: 'AndrectoGod123' },
    {socio: 112, nombre:'Jimena', apellido: 'Ostos', telefono: 3123456789, correo: 'jiostos87@gmail.com', documento: 1007673245, contraseña: 'AdrecitoGod123' },
]

export const HistorialSocio = () => {
    return (
        <div className='content'>
            <Button variant="outlined">Consultar Socio</Button>
            <Stack spacing={2} direction="row">
                
                <h3 className="active fadeIn first"> HISTORIAL SOCIOS </h3>
            </Stack>
            
            
            <MaterialTable
            
                columns={columns}
                data={data}
                title= ""  
                actions={[
                    {
                    icon: 'edit',
                    tooltip: 'Editar Artista',
                    onClick: (event, rowData) => alert('Los datos va a ser actualizados ' +rowData.nombre)
                    },
                    {
                    icon: 'delete',
                    tooltip: 'Eliminar Artista',
                    onClick: (event, rowData) => alert('Esta seguro de eliminar a' +rowData.nombre)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1,
                }}
                localization={{
                    header:{
                    actions: "Acciones"
                    }
                }}
        />
              
        </div>
    )
}
