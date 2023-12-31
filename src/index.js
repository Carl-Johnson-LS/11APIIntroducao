import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(roteadorLogin);
app.use(express.json());
app.use(roteadorUsuario);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/Carl-Johnson-LS/11APIIntroducao",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});