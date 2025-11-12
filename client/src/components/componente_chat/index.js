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

  const nomeUsuario = localStorage.getItem("nomeUsuario") || "Você";

  useEffect(() => {
    // Quando conectar, registra o nome do usuário
    socket.on("connect", () => {
      console.log("✅ Conectado ao servidor:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Erro de conexão:", err);
    });

    const nomeUsuario = localStorage.getItem("nomeUsuario") || "Você";
    socket.emit("registrarUsuario", nomeUsuario);
    socket.emit("entrarSala", salaId);

    
    socket.on("mensagem", (data) => {
      setMensagens((prev) => [...prev, data]);
    });

    // Limpeza quando o componente sair
    return () => {
      socket.emit("sairSala", salaId);
      socket.off("mensagem");
      socket.off("connect");
    };
  }, [salaId, nomeUsuario]);

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
