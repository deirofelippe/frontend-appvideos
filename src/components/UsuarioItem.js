import { cpf } from "cpf-cnpj-validator";
import React from "react";
import { Link } from "react-router-dom";

const UsuarioItem = (props) => {
  const { item: usuario } = props;
  const { id } = usuario;
  const cpfFormatado = cpf.format(usuario.cpf);

  return (
    <tr key={id}>
      <td>
        <Link to={`/usuario/${id}`}>{usuario.nome}</Link>
      </td>
      <td>{usuario.email}</td>
      <td>{cpfFormatado}</td>

      <td>
        <button onClick={() => props.editar(id)}>Editar</button>
      </td>
      <td>
        <button onClick={() => props.deletar(id)}>Deletar</button>
      </td>
    </tr>
  );
};

export default UsuarioItem;
