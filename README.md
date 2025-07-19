# 🥋 Jogo de Combate - Arena Fighters JS

Bem-vindo ao **Arena Fighters**, um mini jogo de combate em turnos feito com **JavaScript** puro, executado no terminal com `node.js`.

Dois lutadores, **Akira** e **Bruno**, se enfrentam em uma batalha de 5 rodadas usando atributos como **Força**, **Agilidade** e **Resistência**. A cada rodada, uma fase é sorteada aleatoriamente e os lutadores rolam dados para determinar quem se destaca ou quem vence o duelo.

---

## 🎮 Como jogar

1. Clone ou baixe este repositório
2. Instale o Node.js (caso ainda não tenha)
3. Execute o jogo com o comando:

```bash
node src/arena-fighters.js

🧑‍🤝‍🧑 Personagens
Akira
🧬 Especialista em força bruta, porém com agilidade mediana.


FORÇA: 5

AGILIDADE: 3

RESISTÊNCIA: 4

PONTOS: 0 (inicial)

Bruno
⚡ Um lutador ágil e rápido, com menos resistência.


FORÇA: 4

AGILIDADE: 5

RESISTÊNCIA: 3

PONTOS: 0 (inicial)

🌀 Fases do Combate
O combate é dividido em rodadas. Em cada rodada, uma das seguintes fases é sorteada:

Fase	Atributo usado	Descrição
ATAQUE	FORÇA	Quem tiver mais força e sorte no dado ataca melhor
ESQUIVA	AGILIDADE	Quem for mais ágil consegue se esquivar melhor e pontuar
DUELO	RESISTÊNCIA	Um confronto direto onde quem tiver mais resistência pode vencer e tirar ponto do oponente

🏆 Condições de Vitória
O jogador com mais pontos ao final das 5 rodadas vence.

Feito com ❤️ em JavaScript, com ajuda da DIO

Em caso de empate, o jogo termina sem um vencedor.

📦 Estrutura do Código
O jogo é escrito em um único arquivo JS e usa funções assíncronas para simular sorteios, rolagens e animações de fluxo lógico no console.


