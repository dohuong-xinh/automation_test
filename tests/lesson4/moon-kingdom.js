
//stage 4
//bai 1
const createCharacters = function() {
    const character = [
        {
            name: "huong xinh",
            level: 10,
            health: 1000,
        },
        {
            name: "huong xinh binh thuong",
            level: 11,
            health: 100,
        }
    ];

    const charactersPowerUp = character.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    const possibleWinners = charactersPowerUp.filter(character => {
        return character.health > 1000;
    });

    return {
        charactersPowerUp,
        possibleWinners
    };
};

const result = createCharacters();
console.log(result.possibleWinners);
//Bai 2
const printLeaderboard = function(players) {
    const sortedPlayers = players.sort((a, b) => b.score - a.score);
    sortedPlayers.forEach((player, index) => {
        let medal = "";

        if (index === 0) medal = "🥇 ";
        else if (index === 1) medal = "🥈 ";
        else if (index === 2) medal = "🥉 ";

        console.log(`${medal}${index + 1}. ${player.name} - ${player.score} pts`);
    });
};
const players = [
    { name: "Mario", score: 1000 },
    { name: "Giang", score: 900 },
    { name: "Huong", score: 850 },
    { name: "Do", score: 800 },
    { name: "Vu", score: 500 }
];
// Gọi hàm để in bảng xếp hạng
printLeaderboard(players);