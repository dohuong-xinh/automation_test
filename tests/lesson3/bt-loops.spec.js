//bai 1
let sum = 0;
for (let i = 1; i <101; i++){
sum = sum + i
}
console.log(sum)

//bai 2
let a = 2
for (let i = 1; i <11; i++){
    let result = a * i
    console.log(a + " x " + i + " = " + result)
}

//bai 3
let b = [];
for (let i = 1; i < 100; i++){
    if(i%2!==0){
      b.push(i);
    }
}
console.log(b)

//bai 4
let email = []
for (let i = 1; i<11; i++){
email.push("user" + i + "@example.com")
}
console.log(email)

//bai 5
let chitiet = [{month: 1, total: 100},
    {month: 2, total: 200},
    {month: 3, total: 300},
    {month: 4, total: 400},
    {month: 5, total: 500},
    {month: 6, total: 600},
    {month: 7, total: 700},
    {month: 8, total: 750},
    {month: 9, total: 800},
    {month: 10, total: 850},
    {month: 11, total: 900},
    {month: 12, total: 950}]
let sum4 = 0
    for (let i = 0; i <chitiet.length; i++){
    sum4 = sum4 + chitiet[i].total 
}
console.log("tong chi tieu trong nam la " + sum4) 
