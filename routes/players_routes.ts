import { Router } from "express";
import { getPlayers, getPlayerById, newPlayer, putPlayers, deletePlayer, getPlayerReviews } from "../controllers/players_controller";

const playersRouter = Router();
// CRUD Players
playersRouter.get("/", getPlayers);
playersRouter.get("/:id", getPlayerById);
playersRouter.post("/", newPlayer);
playersRouter.put("/:id", putPlayers);
playersRouter.delete("/:id", deletePlayer);
playersRouter.get("/:id/reviews", getPlayerReviews);


export default playersRouter;