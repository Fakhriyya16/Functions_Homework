"use strict";
// -----------------Algorithms-------------------

//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function dividing(n){
//     if(n%7==0 && n%3 == 0){
//         return "true";
//     }
//     return "false";
// }

// let result = dividing(22);
// console.log(result);

//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// function factorial(n){
//     let result = 1;
//     if(n < 0){
//         console.log("Input must be a positive number");
//     }
//     else if(n == 0){
//         console.log(result)
//     }
//     else{
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//         console.log(result);
//     }
// }
// factorial(5);

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let nums = [1,2,3,4,5,6,7,8];

// function sumOfSquareOfEvenNums(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element%2 == 0){
//             let square = element**2;
//             sum+=square;
//         }
//     }
//     return sum;
// }

// console.log(sumOfSquareOfEvenNums(nums));

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, 
//ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function login(email,password){
//     if(email == "cavid@code.edu.az" && password == "12345"){
//         console.log("Girish olundu")
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }

// login("cavid@code.edu.az","12345");

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let nums = [1,2,3,4,5,6,7,8];

// function sumOfOddNums(arr){
//     let sum = 0;
//     nums.forEach(element => {
//         if(element%2 == 1){
//             sum+=element;
//         }
//      });
//      return sum;
// }

// console.log(sumOfOddNums(nums));

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let nums = [1,2,3,4,5,6,7,8];

// function countOfEvenNums(arr){
//     let count = 0;
//     arr.forEach(element => {
//         if(element%2==0){
//             count++;
//         }
//     });
//     console.log(count);
// }
// countOfEvenNums(nums);

//8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, 
//functionlar objectlerden ibaret array qebul edecek.
//1) Yashi 18-25 araliginda olan telebelerin sayi.
//2) Emailinde "c" herfi olan studentlerin sayi.

// let students = [
//     {
//         name: "test1",
//         surname: "testov1",
//         age:21,
//         email: "testc1@mail.ru"
//     },
//     {
//         name: "test2",
//         surname: "testov2",
//         age:22,
//         email: "test2@mail.ru"
//     },
//     {
//         name: "test3",
//         surname: "testov3",
//         age:28,
//         email: "test3@mail.ru"
//     },
//     {
//         name: "test4",
//         surname: "testov4",
//         age:15,
//         email: "testc4@mail.ru"
//     }
// ]

// function checkAge(arr){
//     let count = 0;
//     arr.forEach(element => {
//         if(element.age > 18 && element.age < 25)
//         count++;
//     });
//     return count;
// }

// let result = checkAge(students);
// console.log(result);

// function checkEmail(arr){
//     let count = 0;
//     arr.forEach(element => {
//         if(element.email.includes("c")){
//             count++;
//         }
//     });
//     console.log(count);
// }

// checkEmail(students);

//9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// function firstLetterToUpperCase(text){
//     let newWord = text.replace(text.charAt(0),text.charAt(0).toUpperCase());
//     console.log(newWord);
// }

// firstLetterToUpperCase("hello");

// -----------------Class Repetition-------------------

// let person = {
//     name: "Fahriyya",
//     surname: "Tagizade",
//     age: 21
// }

// // console.log(person.name);

// document.querySelector("h1").innerText = person.name;

// let datas = [
//     {
//         name: "Test1",
//         surname: "Testov1",
//         groups: [
//             "PB101",
//             "P120"
//         ],
//         teachers: [
//             "Cavid",
//             "Orxan"
//         ]
//     }, 
//     {
//         name: "Test2",
//         surname: "Testov2",
//         groups: [
//             "PB101",
//         ],
//         teachers: [
//             "Cavid",
//         ]
//     },
//     {
//         name: "Test3",
//         surname: "Testov3",
//         groups: [
//             "P120"
//         ],
//         teachers: [
//             "Orxan"
//         ]
//     }
// ]


// let surname = "Tagizade Fahriyya Azerbaycan";

// console.log(surname.length);

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.trim());

// console.log(surname.startsWith("t"));

// console.log(surname.indexOf("a"));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0,2));

// for (let i = 0; i < surname.length; i++) {
//     console.log(surname[i]);

// }

// console.log(surname.includes("a"));

// let array = surname.split(" ");

// console.log(array);

// console.log(surname.charAt(2));

// console.log(surname.charCodeAt(3));

// console.log(surname.slice(1,4));

// console.log(surname.replace("Azerbaycan","Italiya"));

// let nums = [1,4,5,51,45];

// for (const items of nums) {
//     console.log(items)
// }

// let person = {
//     name: "Fahriyya",
//     surname: "Tagizade",
//     age: 21
// }

// for (const key in person) {
//     if(key == "name" || key == "surname"){
//         console.log(person[key])
//     }
// }


// let nums = [1, 4, 5, 51, 45];

// nums.forEach((element,i) => {
//     console.log(element + " " + i)
// });


// let data = nums.toString();

// let data = nums.join("-");

// nums.pop();

// nums.push(100);

// nums.shift();

// nums.unshift(200);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);

// // console.log(children);


// let address = "Ehmedli";

// let result = [...address];

// console.log(result)



// let obj = {
//     name: "test",
//     surname: "testov"
// }

// let data = {...obj};

// console.log(data);


// let numbers = [1,2,3,4,56,7,76,53];

// let datas = [...numbers];
// console.log(datas)


// function showText(){
//     let a = 100;
//     if(a > 50){
//         console.log("Hello World")
//     }
// }

// showText();


// function showText(text){
//     console.log(text);
// }

// showText("salam");


// function sum(a,b){
//     let result = a + b;
//     console.log(result)
// }

// sum(100,200);

// let datas = [1,45,32,100,34,100]

// function findData(arr){
//     for (const item of arr) {
//         if(item==100){
//             console.log("100 is found");
//             break;
//         }
//     }
//     console.log("Welcome");
// }

// findData(datas);


// function sum(a,b){
//     return a+b;
// }

// let result = sum(4,5);

// // alert(result);

// document.querySelector("h1").innerText = result;


// let datas = [1,45,32,100,34,100];

// function test(arr){
//     let newArr = ["salam","sagol"]
//     arr = newArr;
//     console.log(arr);
// }

// test(datas);
// console.log(datas);

// function test(){
//     let datas = [1,2,3,5,67,1];
//     let newArr = ["salam","sagol"];

//     datas = newArr;
//     newArr[0] = 1000;

//     console.log(datas);
//     console.log(newArr);
// }

// test();

// let arr1 = [1,2,3];
// let arr2 = arr1;

// arr2[0] = 100;
// console.log(arr1);
// console.log(arr2);

// let b = 100;

// function test(a){
//     a=20;
//     console.log(a);
// }

// test(b);
// console.log(b);


// function test(...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         // console.log(element);
//     }
// datas.forEach(element =>{
//     console.log(element)

// });
// }

// test(1,2,3,4,5);


// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element);
//     }
// }

// test(1, 2, 3, 4);

// function showNumber(){
//     console.log(this);
// }

// showNumber();


// const showText = () => {
//     console.log(this)
// }

// showText();


// let student = {
//     name:"Reshad",
//     age:21,
//     address:"Ehmedli",
//     getFullName: function(){
//         console.log(this.name)
//     },
//     getFullData:()=>{
//         console.log(this)
//     }
// }

// student.getFullName();

// student.getFullData();


// const test = () =>{
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
//     }
// }

// test(1,2,3)

// document.querySelector("button").addEventListener("click",function(){
//     window.location.reload();
// })