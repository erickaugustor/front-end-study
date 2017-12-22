//functions
/*

function area(length, width){
    return length * width;
}

var area1 = area(10, 15);
console.log(area1);

var area2 = area(15, 12);
console.log(area1);


var rectangleAreas = []
rectangleAreas.push(area(10, 15));
rectangleAreas.push(area(8, 15));
rectangleAreas.push(area(10, 5));
console.log(rectangleAreas);


var bankBalance = 500;
function makeTransaction(priceOfSale, ){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Funds");
    }
}
makeTransaction(79.00);
makeTransaction(2.32);
makeTransaction(10.45);
console.log(bankBalance);

*/







//objects

function  student(primeiroNome, ultimoNome, idade){
    this.firstName = primeiroNome;
    this.lastName = ultimoNome;
    this.age = idade;
 //   this.greeting = function 
}

var student0 = {
    firstName: "John",
    lastName: "Parker",
    age: 7,
    greeting: function(){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
        //this referencia a variavel do escopo global.
    }
};

console.log(student0.greeting());

//Criando um novo objeto
var student1 = new Object();
student1.firstName = "Jhon";
student1.lastName = "Parker";
student1.age = 7;

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bbo";
student2.age = 5;

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

for(var index = 0; index < students.length; index++){
    console.log(students[index]);
}
