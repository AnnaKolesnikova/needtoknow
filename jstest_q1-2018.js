//######
//Официальное название языка согласно стандарту
ECMAScript

//######
//Перечислите движки/компиляторы/интерпретаторы JS, которые знаете

Node.js

//######
//Напишите код, который поможет определить является ли объект массивом

isArray

//######
//Перечислите все значения, которые приводятся к false

undefined, null, 0, -0, NaN, " "

//######
//Что произойдёт в данном случае
var sum = function (a, b) { return a + b }
sum.result = 4;

//######
//Что произойдёт в данном случае
"c" > true; // false

//######
//Что произойдёт в данном случае
var x = null || 0 || { name: "false" }; // x = { name: "false" }


//######
//Что произойдёт в данном случае
var scope = "global";
function outer() {
    function scope() {
        console.log(scope);
    }
    scope();
}
outer();

// f scope() {
//     console.log(scope);
// }

//######
//Что такое Hoisting? - всплытие переменных 
//https://habr.com/post/127482/

//######
//Что делает функция Function.prototype.bind. Напишите полифил.
//меняет контекст вызова функции
//полифилл - ???

//######
console.log("130" + 3 - "0"); //1303
console.log("two" / 2);
//NaN

//######
var x;
var y = null;
console.log(x == y);            //true
console.log(x === y);          //false
console.log(x === undefined); //true


//######
var obj = {};
console.log(obj.toString());  //[object Object]

//######
var bool = "false";
console.log(bool == false); //false
console.log(Boolean(bool)); //true

//######
var result = "ten" + 2;
console.log(result == NaN); //false

//######
var array1 = new Array(3);
console.log(array1[0]); //undefined

//######
let x = 50;

if (x < 100) {
    let x = 200;
    console.log(x); //200
}
console.log(x); //50

//######
var arr1 = ["3"];
var arr2 = ["3"];
console.log(arr1 == arr2); //false

//######
function x(o) {
    o.a = o.a + 5;
    o = {
        a: 20
    };
}

var obj = { a: 1 };
x(obj);
console.log(obj.a); // 6

//######
var obj = { x: 12 };
Object.prototype.z = 12;
console.log(typeof obj.z == undefined); //false

//######
var globalVar = "global";
function test1() {
    console.log(globalVar); // undefined
    return;

    var globalVar;
}
test1();

//######
var i = 5;
(function () {
    var j = 2;  //not defined
})();
console.log(i + j); // 5

//######
var sum = function (x, y) {
    console.log(arguments.length); // 3
    return x + y;  // 8
}

sum(3, 5, 8);

//######
var test2 = {
    "name": "max",
    "getName": function () {
        return this.name; // name = ""
    }
};

var getName = test2.getName;
console.log(getName() == "max"); // false

//######
var test3 = function () {
    var i = 0;
    for (var i = 0; i < 10; i++) {
        var j = i;
    }
    console.log(i + j);
}
test3();

//######
var answer = 42;

var logAnswer = function () {
    console.log(answer);
}

var sum = function (x, y) {
    var answer = x + y;
    logAnswer();
    return answer;
}

sum(2, 4);

//######

function Car(color) {
    var that = {};
    that.color = color;
    return that;
};

var lada = new Car("red");
console.log(lada instanceof Car); //false

//######

function Car(color) {
    this.color = color;
}

var lada = new Car("black");

Car.prototype.currentGear = 5;
console.log(++lada.currentGear);           //6
console.log(Car.prototype.currentGear);    //5

//######

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.Name;
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName());                                             //Bruce Wayne
console.log(batman.getName.call({ firstName: "Clar", lastName: "Kent" })); //Bruce Wayne

//######

var o = {
    x: 8,

    valueOf: function () {
        return this.x + 2;
    },

    toString: function () {
        return this.x.toString();
    }
};

console.log(o < "9"); //false

//######

console.log(10['toString']['length']); //1

//######

function f() { return f; }
var wildguess = new f() instanceof f;
console.log(wildguess); //false

//######
