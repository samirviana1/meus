import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <C.Conteiner>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Conteiner>
  );
};

export default Home;
