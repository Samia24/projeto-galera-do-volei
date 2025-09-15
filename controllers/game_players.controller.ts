import { Request, Response } from "express";


// Confirmar presença
export const confirmPresence = (req: Request, res: Response) => {
    const { gameId, playerId } = req.params;

    res.status(200).json({
        message: `Jogador ${playerId} confirmou presença na partida ${gameId}.`,
        gameId,
        playerId,
        presence: true
    });
};

// Marcar pagamento (feito pelo organizador)
export const markPayment = (req: Request, res: Response) => {
    const { gameId, playerId } = req.params;

    res.status(200).json({
        message: `Pagamento do jogador ${playerId} confirmado na partida ${gameId}.`,
        gameId,
        playerId,
        payment: true
    });
};