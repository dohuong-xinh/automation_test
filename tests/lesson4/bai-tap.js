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
