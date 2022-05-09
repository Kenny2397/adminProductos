const Producto = require("../models/producto.model");

module.exports.create_product = (req, res) => {
    Producto.create(req.body)
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.get_all = (req, res) => {
    Producto.find()
        .then(productos => res.json(productos))
        .catch(err => res.json({message: "Hubo un error" + err}));
}

module.exports.get_product = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error " + err }));
}

module.exports.update_product = (req, res) => {
<<<<<<< HEAD
    Producto.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then(producto => res.json(producto))
    .catch(err => res.json({message: "Hubo un error " + err }));
=======
    Producto.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error " + err }));
>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed
}

module.exports.delete_product = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
<<<<<<< HEAD
    .then(response => res.json(response))
    .catch(err => res.json({message: "Hubo un error " + err }));
=======
        .then(result => res.json(result))
        .catch(err => res.json({message: "Hubo un error " + err}));
>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed
}