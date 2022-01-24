import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorsList from "./ErrorsList";

const UsuarioEdit = () => {
  const { id } = useParams();

  const [usuario, setUsuario] = useState({});
  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${url}/usuario/${id}`);
      const usuarioAntigo = await res.json();

      setUsuario({ ...usuarioAntigo });
    })();
  }, []);

  const change = (event) => {
    const { name, value } = event.target;

    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const editar = async (event) => {
    event.preventDefault();

    const url = process.env.REACT_APP_BACKEND_URL;

    const res = await fetch(`${url}/usuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...usuario }),
    });

    const body = await res.json();

    if (body?.errors) {
      setErrors({ ...body.errors });
    }
  };

  return (
    <>
      {errors && <ErrorsList errors={errors} />}

      <form>
        <label htmlFor="nome">Nome</label>
        <input
          name="nome"
          id="nome"
          type="text"
          onChange={change}
          value={usuario.nome}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="text"
          onChange={change}
          value={usuario.email}
        />

        <label htmlFor="cpf">CPF</label>
        <input
          name="cpf"
          id="cpf"
          type="text"
          onChange={change}
          value={usuario.cpf}
        />

        <button onClick={editar}>Editar</button>
      </form>
    </>
  );
};

export default UsuarioEdit;
