<<<<<<< HEAD
import React,{useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import axios from "axios";

const ActualizarProducto = () => {

    const {id} = useParams();
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    const history = useHistory();

    useEffect(() => {
=======
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const ActualizarProducto = () => {
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const history = useHistory();

    useEffect( () => {
>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed

        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res => {
                console.log(res.data);
                setNombre(res.data.nombre);
                setPrecio(res.data.precio);
                setDescripcion(res.data.descripcion);
            })
            .catch(err => console.log(err));

<<<<<<< HEAD
    }, []);

    const actualizarProducto = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/"+id, {nombre, precio, descripcion})
            .then(response => history.push("/"))
            .catch(err => console.log(err));
    }

    return(
        <div>
            
=======

    }, []);

    const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/"+id, {
            nombre,
            precio,
            descripcion
        })
            .then(res => history.push("/"))
            .catch(err => console.log(err));
    }
 
    return (
        <div>
>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed
            <h1>Editar Producto</h1>
            <form onSubmit={actualizarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange= {(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input id="precio" name="precio" type="number" className="form-control" value={precio} onChange= {(e) => setPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripci??n:</label>
                    <input id="descripcion" name="descripcion" type="text" className="form-control" value={descripcion} onChange= {(e) => setDescripcion(e.target.value)} />
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>
        </div>
    )
<<<<<<< HEAD
=======

>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed
}

export default ActualizarProducto;