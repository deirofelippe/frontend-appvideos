import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cpf } from "cpf-cnpj-validator";

const Usuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BACKEND_URL;

      const res = await fetch(`${url}/usuario/${id}`);
      const usuarioBuscado = await res.json();

      const cpfFormatado = cpf.format(usuarioBuscado.cpf);
      usuarioBuscado.cpf = cpfFormatado;

      setUsuario({ ...usuarioBuscado });
    })();
  }, []);

  return (
    <>
      <h1>{usuario.nome}</h1>
      <h2>{usuario.email}</h2>
      <h2>{usuario.cpf}</h2>
    </>
  );
};

export default Usuario;
