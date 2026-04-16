//bai 1
const emails = [
    "test@gmail.com",
    "hello.com",
    "admin@yahoo.com",
    "abc123"
];
const isValidEmail = function(emails) {
    const validEmails = [];

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        if (!email.includes("@") || !email.includes(".")) {
            continue;
        }
        validEmails.push(email);
    }
    return validEmails;
};
console.log(isValidEmail(emails));

//bai 2
const users = ["guest", "editor", "admin", "admin2"];
const findFirstAdmin = function(users) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.includes("admin")) {
            console.log(user);
            break;
        }
    }
};
findFirstAdmin(users);

//bai 3
const orders = [200, -50, 300, 0, 150];
const total = function(orders) {
    let total = 0;
    for (let i=0; i < orders.length; i++){
        const number = orders[i];
    if (number <= 0) {
        continue;
    }
    total += number;
}
return total;
}
console.log(total(orders));

//bai 4
const users1 = [
    {name: "Anna", active: true},
    {name: "Tom", active: false},
    {name: "John", active: true}
];
for (let i=0; i< users1.length; i++){
    let user=users1[i]
    let type = user.active? "Active" : "Inactive";
console.log(user.name + ": " + type)
}

//bài 5
function isPrime(a){
if (a < 2) return false
if (a > 2) return true
if (a===2) return true
for (i=3; i < a; i+=2)
{
    if (a%i===0)
    {
        return false
    }
}
}
console.log(isPrime(11))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(10))

//bai 6
const prices = [120, 90, 300, 250, 150];
let maxNumber = [0];
for (let i = 1; i < prices.length; i++){
    if (prices[i] > maxNumber){
        maxNumber = prices[i]
    }
}
console.log("số lớn nhất là: " + maxNumber)

//bai 7
const orders1 = [50, 120, 80, 200];
for (let i=1; i < orders1.length; i++){
    let status2 = (orders1[i] >= 100) ? "Paid Shipping": "Free Shipping"
    console.log(orders[i] + ": " + status2)
}

//bài 8
const users3= [
{name: "A", online: true},
{name: "B", online: false},
{name: "C", online: true},
{name: "D", online: true}
]
let count = 0;

for (const user of users3) {
  if (user.online) {
    count++;
  }
}

console.log("Số user online:", count);

//bài 9
function formatUserName(name) {
      return name.trim().toLowerCase();
}
 console.log(formatUserName("    ĐỖ THỊ hương      "))

 //bài 10
 const products = [
{name: "Laptop", stock: 5},
{name: "Mouse", stock: 0},
{name: "Keyboard", stock: 10},
 ]
const remain = function(products) {
  const result = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.stock === 0) {
      continue;
    }

    result.push(product);
  }

  return result;
};
console.log(remain(products));
