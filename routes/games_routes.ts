import { Router } from "express";
import { closeGame, getGames } from "../controllers/games_controller";

const gamesRouter = Router();

gamesRouter.get("/", getGames);
gamesRouter.patch("/:id", closeGame);

export default gamesRouter;