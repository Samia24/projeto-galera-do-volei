import express, { Request, Response } from "express";
import playersRouter from "./routes/players_routes";
import solicitationsRouter from "./routes/solicitations_routes";
import gamesRouter from "./routes/games_routes";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/players", playersRouter);
app.use("/games", gamesRouter);
//app.use("/solicitations", solicitationsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Olá, mundo com TypeScript! 🚀");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
