const Task = require('../models/tareas');

module.exports = {
    list: function (req,res) {
        Task.find({},(err,tareas)=>{
            if (err){ res.status(400).json({message:err.message}); }
            res.status(200).json({tareas:tareas});
        });
    },
    create: function (req,res) {
        let unaTarea = new Task({
            nombre: req.body.nombre,
            fechaTentativa:req.fechaTentativa,
            fechaFin: req.fechaFin, 
            fechaInicio: req.fechaInicio
        });

        console.log(req.body);
        console.log(unaTarea);

        unaTarea.save((err) =>{
            if(err){ res.status(400).json({message: err.message}); }
            res.status(200).json({tarea: unaTarea});
        });
        
    },
    update: function (req,res) {
        //cargamos los datos del formulario
        let unaTarea = {
            nombre: req.body.nombre,
            fechaTentativa:req.fechaTentativa,
            fechaFin: req.fechaFin, 
            fechaInicio: req.fechaInicio
        }
        // buscamos y actualizamos
        Task.findByIdAndUpdate( req.params.id, unaTarea, ( err,result ) => {
                    if(err){ res.status(400).json({message: err.message}); }
                    res.status(200).json({tarea: result});
                });
    },
    details: function (req,res) {
        Task.findById(req.params.id ,(err,result)=>{
            if(err){ res.status(400).json({message: err.message}); }
            res.status(200).json({tarea: result});
        });
    },
    delete: function (req,res) {
        Task.findByIdAndDelete(req.params.id, (err) => {
            if(err){ res.status(400).json({message: err.message}) }
            else {
                res.status(200).json({ tarea: 'se ha borrado exitosamente' })
            }
        });
    }
}


