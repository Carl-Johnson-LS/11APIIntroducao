import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";

app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/Carl-Johnson-LS/11APIIntroducao.git",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});



