fighter1 = {
    NOME: 'Akira',
    FORCA: 5,
    AGILIDADE: 3,
    RESISTENCIA: 4,
    PONTOS: 0
};
fighter2 = {
    NOME: 'Bruno',
    FORCA: 4,
    AGILIDADE: 5,
    RESISTENCIA: 3,
    PONTOS: 0
};


async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result
    switch (true) {
        case random < 0.33:
            result = 'ATAQUE'
            break; 
        case random < 0.66:
            result = 'ESQUIVA'
            break;
        default:
            result = 'DUELO'
            break;   
        }
    return result;
}

async function logRollResult (characterName, block, diceResult, attribute) {
     console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}


async function playRaceEngine(chracter1, chracter2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // rolar dados
        let diceReult1 = await rollDice()
        let diceReult2 = await rollDice()

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === 'ATAQUE') {
            totalTestSkill1 = diceReult1 + chracter1.FORCA;
            totalTestSkill2 = diceReult2 + chracter2.FORCA;
            await logRollResult(chracter1.NOME, 'Força', diceReult1, chracter1.FORCA);
            await logRollResult(chracter2.NOME, 'Força', diceReult2, chracter2.FORCA);
        }

        if (block === 'ESQUIVA') {
            totalTestSkill1 = diceReult1 + chracter1.AGILIDADE;
            totalTestSkill2 = diceReult2 + chracter2.AGILIDADE;
            await logRollResult(chracter1.NOME, 'Agilidade', diceReult1, chracter1.AGILIDADE);
            await logRollResult(chracter2.NOME, 'Agilidade', diceReult2, chracter2.AGILIDADE);
        }

        if (block === 'DUELO') {
           let powerResult1 = diceReult1 + chracter1.RESISTENCIA;
           let powerResult2 = diceReult2 + chracter2.RESISTENCIA;
           console.log(`${chracter1.NOME} confrontou com ${chracter2.NOME}!`);
            await logRollResult(chracter1.NOME, 'Resistência', diceReult1, chracter1.RESISTENCIA);
            await logRollResult(chracter2.NOME, 'Resistência', diceReult2, chracter2.RESISTENCIA);

            if(powerResult1 > powerResult2 && chracter2.PONTOS > 0)
                { console.log(`${chracter1.NOME} venceu o confronto! ${chracter2.NOME} perde um ponto.`);
                    chracter2.PONTOS --;}
            if(powerResult2 > powerResult1 && chracter1.PONTOS > 0)
                {console.log(`${chracter2.NOME} venceu o confronto! ${chracter1.NOME} perde um ponto.`);
                    chracter1.PONTOS --;}
            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto é marcado." : "");
        }

        if(totalTestSkill1 > totalTestSkill2) {
            console.log(`${chracter1.NOME} marcou um ponto!`);
            chracter1.PONTOS++;
        }else if(totalTestSkill2 > totalTestSkill1) {
            console.log(`${chracter2.NOME} marcou um ponto!`);
            chracter2.PONTOS++;
        } 
        console.log("----------------------------------");
    }
}


async function declareWinner(chracter1, chracter2) {
    console.log("Resultado final!");
    console.log(`${chracter1.NOME} - Ponto(s): ${chracter1.PONTOS}`);
    console.log(`${chracter2.NOME} - Ponto(s): ${chracter2.PONTOS}`);

    if(chracter1.PONTOS > chracter2.PONTOS) 
        console.log(`\n${chracter1.NOME} é o vencedor!`);
    else if(chracter2.PONTOS > chracter1.PONTOS) 
        console.log(`\n${chracter2.NOME} é o vencedor!`);
     else 
        console.log("\nEmpate! Ninguém venceu.");
    
}

(async function main()
{ 
    console.log(`Combate entre ${fighter1.NOME} e ${fighter2.NOME} começando...\n` );
    await playRaceEngine(fighter1, fighter2);
    await declareWinner(fighter1, fighter2);
})();