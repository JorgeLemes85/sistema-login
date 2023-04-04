/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, From } from "./styles";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";

const Login = () => {
  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.target.value);
  };

  return (
    <Container>
      <From>
        <h1>Faça o seu Login 👋</h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Botao type="submit" text="Entrar!" onChange={handleChange} />

        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </From>
    </Container>
  );
};

export default Login;
