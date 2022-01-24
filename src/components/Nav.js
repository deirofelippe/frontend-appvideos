import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <a href="/">APPVIDEOS</a>
      <div>
        <li>
          <Link to="/">Listar usuarios</Link>
        </li>
        <li>
          <Link to="/usuario/form">Criar usuario</Link>
        </li>
      </div>
    </div>
  );
};

export default Nav;
