import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import TodosProductos from "./componentes/TodosProductos";
import NuevoProducto from "./componentes/NuevoProducto";
import Producto from "./componentes/Producto";
import ActualizarProducto from "./componentes/ActualizarProducto";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <TodosProductos />} />
          <Route path="/nuevo" render={() => <NuevoProducto />} />
          <Route path="/producto/:id" exact render={()=> <Producto />} />
<<<<<<< HEAD
          <Route path="/producto/editar/:id" render={()=><ActualizarProducto />}/>
=======
          <Route path="/producto/editar/:id" render={() => <ActualizarProducto />} />
>>>>>>> 2028644f483ec81b763eff422d9983d4dbfeb3ed
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
