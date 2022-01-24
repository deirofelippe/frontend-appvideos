import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UsuarioItem from "./UsuarioItem";

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BACKEND_URL;

      const res = await fetch(`${url}/usuario`);
      const lista = await res.json();

      setUsuarios(lista);
    })();
  }, []);

  const editar = (id) => {
    history.push(`/usuario/edit/${id}`);
  };

  const deletar = async (id) => {
    if (!window.confirm("Tem certeza que deseja deletar?")) {
      return;
    }

    const url = process.env.REACT_APP_BACKEND_URL;
    const res = await fetch(`${url}/usuario/${id}`, { method: "DELETE" });
    const ok = res.ok;

    if (ok) {
      const novosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
      setUsuarios([...novosUsuarios]);
    }
  };

  return (
    <>
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>CPF</th>
          <th>#</th>
          <th>#</th>
        </tr>
        {usuarios.map((usuario) => (
          <UsuarioItem item={usuario} editar={editar} deletar={deletar} />
        ))}
      </table>
    </>
  );
};

export default UsuarioList;
