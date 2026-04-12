//bai 1
const playerName = "Mario";
const currentLives = 3;
const coins = [25, 30, 45];
const math = function(coins){
    const total = coins[0] + coins[1] + coins[2]; 
    const average = total/coins.length;
    const sodu = total % coins.length;
    return {average, total, sodu};
};
console.log(math(coins).sodu)

//bai 2
const powerUp = "mushroom";
if (powerUp === "mushroom"){
    console.log("Mario becomes Super!")
} else if (powerUp === "flower"){
    console.log("Mario can shoot fireballs!")
} else if (powerUp === "star"){
    console.log("Mario is invincible!")
} else if (powerUp === "none"){
    console.log("Mario is normal")
} else {
    console.log("Unknown power-up")
}
