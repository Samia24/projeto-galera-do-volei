import { Router } from "express";
import { closeGame, deleteGame, getGameById, getGames, newGame, putGame } from "../controllers/games_controller";

const gamesRouter = Router();

gamesRouter.post("/", newGame);
gamesRouter.get("/", getGames);
gamesRouter.get("/:id", getGameById);
gamesRouter.patch("/:id", closeGame);
gamesRouter.put("/:id", putGame);
gamesRouter.delete("/:id", deleteGame);

export default gamesRouter;