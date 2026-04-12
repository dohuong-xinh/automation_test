const playerName = "Mario";
const currentLives = 3;
const coins = [25, 30, 45];
const math = function(coins){
    const total = coins[0] + coins[1] + coins[2]; 
    const average = total/coins.length;
    const sodu = total%coins.length;
    return {average, total, sodu};
};

console.log(math(coins).sodu)