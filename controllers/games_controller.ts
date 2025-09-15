import { Request, Response } from "express";


// Listar todos os jogadores
export const getGames = (req: Request, res: Response) => {
    const { status } = req.query;
    // Lógica de filtragem de partidas pelo status recebido via params
    res.json([{
        id: 1,
        organizer: {
            id: 1,
            name: "Sâmia",
            age: 31,
            gender: "F", // masculino (M), feminino (F), outro (O).
            email: "samia@gmail.com",
            phone: "8688880000",
            adress: "Rua das Flores",
            neighborhood: "Corais",
            skill_level: "I", // básico (B), intermediário (I) e avançado (A).
            password: "ola2025"
        },
        starts_at: "2025-09-13T18:00:00.429Z",
        ends_at: "2025-09-13T20:00:00.101Z",
        players: [
            {
                id: 2,
                name: "Maria",
                age: 25,
                gender: "F", // masculino (M), feminino (F), outro (O).
                email: "maria@gmail.com",
                phone: "8699980000",
                adress: "Rua Azul",
                neighborhood: "Centro",
                skill_level: "A", // básico (B), intermediário (I) e avançado (A).
                password: "oii200"
            },
            {
                id: 3,
                name: "João",
                age: 26,
                gender: "M", // masculino (M), feminino (F), outro (O).
                email: "joao@gmail.com",
                phone: "8998880000",
                adress: "Rua Verde",
                neighborhood: "Leste",
                skill_level: "B", // básico (B), intermediário (I) e avançado (A).
                password: "hello2"
            }
        ],
        type: "M", // mista (M), especifica (E)
        localization: "The Beach - São João",
        status: "A" // Aberta (A), cancelada (C), realizada (R)
    }]);
}

// Encerrar partida
export const closeGame = (req: Request, res: Response) => {
    const {id} = req.params;
    // Lógica para encerrar a partida alterando o status
    res.status(200).json({message: "Partida encerrada!"});
}

