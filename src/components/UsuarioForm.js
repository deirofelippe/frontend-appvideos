import React, { useState } from "react";
import ErrorsList from "./ErrorsList";

const UsuarioForm = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
  });

  const [errors, setErrors] = useState();

  const cadastrar = async (event) => {
    event.preventDefault();

    const url = process.env.REACT_APP_BACKEND_URL;

    const res = await fetch(`${url}/usuario`, {
      method: "POST",
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

  const change = ({ target: { name, value } }) => {
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  return (
    <>
      {errors && <ErrorsList errors={errors} />}

      <form>
        <label htmlFor="nome">Nome</label>
        <input name="nome" id="nome" type="text" onChange={change} />

        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="text" onChange={change} />

        <label htmlFor="cpf">CPF</label>
        <input name="cpf" id="cpf" type="text" onChange={change} />

        <label htmlFor="senha">Senha</label>
        <input name="senha" id="senha" type="password" onChange={change} />

        <button onClick={cadastrar}>Cadastrar</button>
      </form>
    </>
  );
};

export default UsuarioForm;
