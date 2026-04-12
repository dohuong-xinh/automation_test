//bai 1
const car = {"make": "Toyota", "model": "Corolla", "year" : 2021};
console.log(car.year)

//bai 2
const person = {"name": "huong",
    "address":
    {
        "street": "Phu Nghia",
        "city": "Ha Noi",
        "country": "Viet Nam"
    }
};
console.log(person.name + " " + person.address.street)

//bai 3
const student = {"name": "Huongxinh", 
    "grades":
    {
        "math": 1,
        "english": 2
    }
};
console.log("Diem toan la " + student["grades"]["math"])

//bai 4
const settings = {"volumn": 12, "brightness": 100
}
settings.volumn = 50;
console.log(settings.volumn)

//bai 5
const bike = {"make": "Viet Nhat", "model": "2026"}
bike.color = "Pink"
console.log(bike)

//bai 6
const employee = {"name": "Huongxinh", "age": 20}
delete employee.age
console.log(employee)

//bai 7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}
console.log(school.classA + "," + school.classB)


