import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxIcon, Container, Image, DataBox, InputName, Submit, Title } from "./style";
import logo from '../../images/yellow.jpg';

export default function DataLogin() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function entrar() {
    if (name.trim() !== "") {
      localStorage.setItem("nomeUsuario", name);
      navigate("/home");
    }
  }

    return (
        <Container>
            <Title>Welcome to KaBi CHAT!</Title>
            <BoxIcon>
                <Image src={logo} />
            </BoxIcon>
            <DataBox>
                <InputName 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Submit 
                    value="ENTRAR"  
                    onClick={entrar}
                />
            </DataBox>
        </Container>
    )
}
