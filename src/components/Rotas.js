import React from "react";
import { Route, Switch } from "react-router-dom";
import Usuario from "./Usuario";
import UsuarioEdit from "./UsuarioEdit";
import UsuarioForm from "./UsuarioForm";
import UsuarioList from "./UsuarioList";

const Rotas = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/usuario"]} component={UsuarioList} />
        <Route path="/usuario/edit/:id" component={UsuarioEdit} />
        <Route path="/usuario/form" component={UsuarioForm} />
        <Route path="/usuario/:id" component={Usuario} />
      </Switch>
    </>
  );
};

export default Rotas;
