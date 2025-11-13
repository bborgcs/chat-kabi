import { useParams, useNavigate } from "react-router-dom";
import { chat as listaChats } from "../../utils/datatest";
import { Container, ChatBox, SideBar, AcaoVoltar } from "./style";
import ChatTela from "../../components/componente_chat";

export default function Chat() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sala = listaChats.find((c) => c.id === Number(id));

  if (!sala) {
    return <h2>Chat não encontrado</h2>;
  }

  

  return (
    <Container>
      <SideBar>
        <AcaoVoltar onClick={() => navigate("/home")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF"
            className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-.5.5v2H5.707l1.147-1.146a.5.5 0 1 0-.708-.708l-2 2a.498.498 0 0 0-.146.35v.008a.498.498 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.708L5.707 9H8v2a.5.5 0 0 0 1 0v-2h1.5a.5.5 0 0 0 0-1H9V5a.5.5 0 0 0-.5-.5z" />
          </svg>
        </AcaoVoltar>
      </SideBar>

      <ChatBox>
        <ChatTela chat={sala} />
      </ChatBox>
    </Container>
  );
}
