# 🏐 Galera do Vôlei

## 👤 Jogador
1. Quero me cadastrar no sistema.  
2. Quero fazer login.  
3. Quero visualizar partidas disponíveis.  
4. Quero solicitar inscrição em uma partida.  
5. Quero confirmar minha presença na partida.  
6. Quero avaliar a partida após participar.  
7. Quero avaliar outros jogadores da partida.  
8. Quero consultar as avaliações que recebi.  

## 👤 Jogador (como Organizador)
1. Quero criar partidas (quando crio, viro organizador dessa partida).  
2. Quero editar ou excluir minhas partidas criadas.  
3. Quero aceitar ou rejeitar solicitações de jogadores.  
4. Quero dividir os times com base no nível dos jogadores.  
5. Quero confirmar presença de jogadores na lista da partida.  
6. Quero marcar quais jogadores já realizaram o pagamento.  
7. Quero encerrar a partida.  
8. Quero visualizar avaliações da partida e dos jogadores.  

---

# 📡 Endpoints da API

## Players (Jogadores)
- **POST /players** → Criar jogador (cadastro). ✅  
- **GET /players** → Listar todos jogadores. ✅  
- **GET /players/:id** → Consultar jogador específico. ✅  
- **PUT /players/:id** → Editar dados do jogador. ✅  
- **DELETE /players/:id** → Excluir jogador. ✅  
- **GET /players/:id/reviews** → Consultar avaliações recebidas. ✅  

---

## Games (Partidas)
- **POST /games** → Criar partida (se o player cria, vira organizador dessa partida). ✅
- **GET /games** → Listar todas as partidas abertas. ✅  
- **GET /games/{id}** → Consultar partida específica. ✅
- **PUT /games/{id}** → Editar partida (apenas organizador da partida). ✅
- **DELETE /games/{id}** → Excluir partida (apenas organizador). ✅
- **PATCH /games/{id}/close** → Encerrar partida. ✅

## GamePlayers (Partida-Jogadores)
- **PATCH /:gameId/players/:playerId/presence** → Confirmar presença de jogador. ✅
- **PATCH /:gameId/players/:playerId/payment** → Marcar pagamento de jogador. ✅

---

## Solicitations (Solicitações)
- **POST /games/:id/solicitations** → Jogador solicita inscrição em partida.  
- **GET /players/:id/solicitations** → Consultar solicitações feitas por um jogador.  
- **GET /games/:id/solicitations** → Consultar solicitações de uma partida (organizador).  
- **PATCH /solicitations/:id/accept** → Organizador aceita solicitação.  
- **PATCH /solicitations/:id/reject** → Organizador rejeita solicitação.  

---

## Reviews (Avaliações)
- **Jogador avalia partida:**  
  - **POST /games/{id}/reviews**  

- **Jogador avalia outro jogador da mesma partida:**  
  - **POST /games/{id}/players/{idPlayer}/reviews**  

- **Consultar avaliações:**  
  - **GET /games/{id}/reviews** → Organizador vê feedback da partida.  
  - **GET /players/{id}/reviews** → Jogador vê avaliações recebidas.  
