const express = require('express');
const router = express.Router();
const conexion = require('./bbdd');
const crud = require('./crud');

// Ruta Principal
router.get('/',(req,res)=>{
    res.render('index');
});

// Ruta Consultas
router.get('/consulta', (req,res)=>{
    const consulta = 'SELECT * FROM alumnos';
    conexion.query(consulta, (err, registros)=>{
        if(err){
            throw err;
        }else{
            // res.send(registros);
            res.render('consulta',{resultados: registros});
        }
    });
});

// ruta para ordenar por nombre
router.get('/consulta/:ordena',(req,res)=>{
    const ordena = req.params.ordena;
    const orderBy = `SELECT * FROM alumnos ORDER BY ${ordena};`;
    conexion.query(orderBy,(err, registros)=>{
        if(err){
            throw err;
        }else{
            res.render('consulta',{resultados: registros});
        }
    });
});

// Ruta Editar Registros
router.get('/modifica/:id',(req,res)=>{
    const id = req.params.id;
    const busca = `SELECT * FROM alumnos WHERE idalumnos = ${id};`;
    conexion.query(busca,(err, registro)=>{
        if(err){
            throw err;
        }else{
            res.render('modifica', {alumno: registro[0]});
        }
    });
});

// Ruta para Eliminar Registros
router.get('/elimina/:id',(req,res)=>{
    const id = req.params.id;
    let muestra;
    const elimina = `DELETE FROM alumnos WHERE idalumnos = ${id};`;
    conexion.query(elimina,(err)=>{
        if(err){
            throw err;
        }else{
            muestra = "Registro eliminado con exito!!";
            res.render('index', {muestra});
        }
    })
});

router.post('/validar', crud.validar);
router.post('/actualizar', crud.actualizar);

module.exports = router;