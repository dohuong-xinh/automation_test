//bai 1
const multiply = function(a, b){
    return a * b
}
console.log(multiply(10,11))
console.log(multiply(19,99))

//bai 2
const findMin = function(a, b, c){
    return Math.min(a, b, c)
}
console.log(findMin(1, 2, 3))
console.log(findMin(15, 10, 14))

//bai 3
 let threshold = 9
 let students = [{name: "Huongxinh", score: 10},
    {name: "An", score: 9},
    {name: "Binh", score: 8},
    {name: "Chau", score: 7}
    ]
const getTopStudents = function(students, threshold){
    return students.filter(student => student.score >= threshold).map(student => student.name);
}
console.log(getTopStudents(students, threshold))

//bai 4
const calculateInterest = function (principal, rate, years){
const total = principal + principal * rate * years / 100;
return total;
}
console.log(calculateInterest(1000, 5, 2))