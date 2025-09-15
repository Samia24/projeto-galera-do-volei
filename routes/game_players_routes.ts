import { Router } from "express";
import { confirmPresence, markPayment } from "../controllers/game_players.controller";


const gamePlayersRouter = Router();

gamePlayersRouter.patch("/:gameId/players/:playerId/presence", confirmPresence);
gamePlayersRouter.patch("/:gameId/players/:playerId/payment", markPayment);

export default gamePlayersRouter; 
