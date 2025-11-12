import { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import {
  ContainerEnvio,
  ContainerTitle,
  ContainerChat,
  Submit,
  Title,
  InputMensagem,
  ContainerConversa
} from "./style";

export default function ChatTela({ chat }) {
  const nomeChat = chat.nome.toUpperCase();
  const salaId = chat.id.toString();
  const [mensagens, setMensagens] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
    console.log("✅ Conectado ao servidor:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("❌ Erro de conexão:", err);
  });
    socket.emit("entrarSala", salaId);

    socket.on("mensagem", (data) => {
      setMensagens((prev) => [...prev, data]);
    });

    return () => {
      socket.emit("sairSala", salaId);
      socket.off("mensagem");
    };
  }, [salaId]);

  const nomeUsuario = localStorage.getItem("nomeUsuario") || "Você";

  socket.emit("registrarUsuario", nome);


  function enviarMensagem() {
    if (!texto.trim()) return;
    socket.emit("mensagem", {
      salaId,
      remetente: nomeUsuario,
      texto,
    });
    setTexto("");
  }

  return (
    <ContainerChat>
      <ContainerTitle>
        <Title>{nomeChat}</Title>
      </ContainerTitle>

      <ContainerConversa>
        {mensagens.map((m, i) => (
          <p key={i}>
            <strong>{m.remetente}:</strong> {m.texto}
          </p>
        ))}
      </ContainerConversa>

      <ContainerEnvio>
        <InputMensagem
          placeholder="Digite sua mensagem..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
        />
        <Submit type="button" value="Enviar" onClick={enviarMensagem} />
      </ContainerEnvio>
    </ContainerChat>
  );
}
