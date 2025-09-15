import { Request, Response } from "express";

// Criar jogador
export const newPlayer = (req: Request, res: Response) => {
    const data = req.body;
    const {name, age, gender, email, phone, adress, neighborhood, skill_level, password} = data;
    res.status(201).json({
        message: "Cadastro realizado com sucesso!",
        created:  {name, age, gender, email, phone, adress, neighborhood, skill_level, password}
    });
}

// Listar todos os jogadores
export const getPlayers = (req: Request, res: Response) => {
    res.json([{name: "Sâmia", age: 31}, {name: "Amanda", age: 21}]);
}

//const getPlayerGames - Pra listar as partidas de um organizador específico.
// Faremos um filtro na rota de partidas.

// Consultar jogador específico
export const getPlayerById = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        id,
        name: "Sâmia",
        age: 31,
        gender: "Feminino",
        email: "samia@gmail.com",
        phone: "8688880000",
        adress: "Rua das Flores",
        neighborhood: "Corais",
        skill_level: "Intermediário"
    });
};


// Editar jogador
export const putPlayers = (req: Request, res: Response) => {
    const { id } = req.params; // pega o ID da URL
    const { name, age, gender, email, phone, adress, neighborhood, skill_level, password } = req.body;

    res.status(200).json({
        message: `Jogador ${id} atualizado com sucesso!`,
        updated: {
            name,
            age,
            gender,
            email,
            phone,
            adress,
            neighborhood,
            skill_level,
            password
        }
    });
};

// Excluir jogador
export const deletePlayer = (req: Request, res: Response) => {
    const { id } = req.params;

    res.status(200).json({
        message: `Jogador ${id} excluído com sucesso!`
    });
};

// Listar avaliações recebidas (Aqui deixo o nome do avaliador, no front eu não boto para aparecer o nome do avaliador)
export const getPlayerReviews = (req: Request, res: Response) => {
    res.json([{id: 1, reviewer_id: 1, player_id: 1, review: 5, comment: "Nada a melhorar"}]);
}