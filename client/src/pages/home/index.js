import { useNavigate } from "react-router-dom";
import { Container, ChatBox, SideBar, ContainerChats } from "./style";
import { chat as listaChats } from "../../utils/datatest";
import ChatCard from "../../components/componente_chatlist";

export default function Home() {
  const navigate = useNavigate();

  function abrirChat(chatId) {
    navigate(`/chat/${chatId}`);
  }

  return (
    <Container>
      <SideBar></SideBar>

      <ChatBox>
        <ContainerChats>
          {listaChats.map((p) => (
            <div key={p.id} onClick={() => abrirChat(p.id)}>
              <ChatCard chat={p} />
            </div>
          ))}
        </ContainerChats>
      </ChatBox>
    </Container>
  );
}
