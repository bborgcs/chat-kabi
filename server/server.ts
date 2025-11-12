import express, { Application } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

class App {
  private app: Application;
  private httpServer: http.Server;
  private io: Server;
  private usuarios: Map<string, string>; // armazena socket.id -> nome

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    this.usuarios = new Map();

    this.middlewares();
    this.routes();
    this.sockets();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.get("/", (req, res) => {
      res.send("Servidor do chat em tempo real 🎧");
    });
  }

  private sockets() {
    this.io.on("connection", (socket) => {
      console.log(`🟢 Cliente conectado: ${socket.id}`);

      // REGISTRO IMEDIATO DO USUÁRIO (antes de qualquer ação)
      socket.on("registrarUsuario", (nome: string) => {
        if (nome && nome.trim() !== "") {
          this.usuarios.set(socket.id, nome);
          console.log(`👤 ${socket.id} registrado como ${nome}`);
          socket.emit("registrado", nome); // confirma ao cliente
        }
      });

      socket.on("entrarSala", (salaId) => {
        socket.join(salaId);
        console.log(`➡️ ${socket.id} entrou na sala ${salaId}`);
      });

      socket.on("sairSala", (salaId) => {
        socket.leave(salaId);
        console.log(`⬅️ ${socket.id} saiu da sala ${salaId}`);
      });

      socket.on("mensagem", (data) => {
        const { salaId, texto } = data;
        const remetente = this.usuarios.get(socket.id) || "Anônimo";
        console.log(`💬 [Sala ${salaId}] ${remetente}: ${texto}`);

        this.io.to(salaId).emit("mensagem", { remetente, texto });
      });

      socket.on("disconnect", () => {
        console.log(`🔴 Cliente desconectado: ${socket.id}`);
        this.usuarios.delete(socket.id);
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
