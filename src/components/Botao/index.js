import React from "react";
import { BotaoCustomizado } from "./styles";

const Botao = ({
  typr,
  text,
  onChange,
  // disabled,
}) => {
  return (
  <BotaoCustomizado 
  typr={typr}
  text={text}
  onChange={onChange} >
    {text}
  </BotaoCustomizado>
  
 

  );
};

export default Botao;


