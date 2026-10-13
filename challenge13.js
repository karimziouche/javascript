'use.strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const fieldPlayers = players1.slice(1);
let gk = players1[0];

const players2 = game.players[1];

const allPlayers = players1.concat(players2);

const players1Final = players1.concat("Thiago", "Coutinho", "Perisic");

let team1 = game.odds["team1"];
let draw = game.odds["x"];
let team2 = game.odds["team2"];

function printGoals(name) {
    let but = 0
    for (let i = 0; i < game.scored.length; i++)
    if (game.scored[i] === name) {
        but++;
    }
    console.log(but)
}

if (team1 < team2) {
    console.log("Bayern Munich a le plus de chance de gagner");
} else {
    console.log("Borrussia Dortmund a le plus de chance de gagner")
}

for (let i = 0; i < game.scored.length; i++) {
    console.log(`But ${i + 1} : ${game.scored[i]}`)
}

const cotes = [1.33, 3.25, 6.5];

let somme = 0;

for (let i = 0; i < cotes.length; i++) {
    somme += cotes[i];
}

let moyenne = somme / cotes.length;

console.log(`Probabilité de victoire pour ${game.team1} : ${game.odds.team1}`)
console.log(`Probabilité d'égalité : ${game.odds.x}`)
console.log(`Probabilité de victoire de ${game.team2} : ${game.odds.team2}`)

const scorers = {
    Lewandowski : 2,
    Gnarby : 1,
    Hummels : 1,
};

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

const events = [
    "⚽ GOAL",
    "🔁 Substitution",
    "🟨 Yellow card",
    "🟥 Red card",
]

gameEvents.splice(4, 1);

let moyenne2 = 90 / gameEvents.length;

console.log(`Un événement est apparu en moyenne toutes les ${moyenne2} minutes`);

for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i][0] <= 45) {
        console.log(`[PREMIERE MOITIE] ${gameEvents[i][0]} . ${gameEvents[i][1]}`);
    } else {
        console.log(`[DEUXIEME MOITIE] ${gameEvents[i][0]} . ${gameEvents[i][1]}`);
    }
}