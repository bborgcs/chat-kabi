import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

class App {
  private app: Application;
  private httpServer: http.Server;
  private io: Server;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "http://localhost:3000", // frontend React
        methods: ["GET", "POST"],
      },
    });

    this.middlewares();
    this.routes();
    this.sockets();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.get('/', (req, res) => {
      res.send('Servidor do chat em tempo real 🎧');
    });
  }

  private sockets() {
    this.io.on('connection', (socket) => {
      console.log(`🟢 Cliente conectado: ${socket.id}`);

      // Quando o cliente informa seu nome
      socket.on("registrarUsuario", (nome: string) => {
        (socket as any).nomeUsuario = nome;
        console.log(`👤 Usuário registrado: ${nome}`);
      });

      // Entrar em uma sala
      socket.on("entrarSala", (salaId: string) => {
        socket.join(salaId);
        console.log(`➡️ ${socket.id} entrou na sala ${salaId}`);
      });

      // Sair da sala
      socket.on("sairSala", (salaId: string) => {
        socket.leave(salaId);
        console.log(`⬅️ ${socket.id} saiu da sala ${salaId}`);
      });

      // Enviar mensagem
      socket.on("mensagem", (data: { salaId: string; texto: string; remetente?: string }) => {
        const nome = (socket as any).nomeUsuario || data.remetente || "Anônimo";
        console.log(`💬 [Sala ${data.salaId}] ${nome}: ${data.texto}`);
        this.io.to(data.salaId).emit("mensagem", {
          remetente: nome,
          texto: data.texto,
        });
      });

      // Desconexão
      socket.on("disconnect", () => {
        console.log(`🔴 Cliente desconectado: ${socket.id}`);
      });
    });
  }

  public listenServer() {
    const PORT = 3001;
    this.httpServer.listen(PORT, () => {
      console.log(`✅ Server rodando em http://localhost:${PORT}`);
    });
  }
}

const app = new App();
app.listenServer();
