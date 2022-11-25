//creating a object
var obj = {
  name: "john",
  age: 23,
};
console.log(obj);
// adding key and value to object
var obj = {
  name: "john",
  age: 23,
};
obj.gender = "male";
console.log(obj);

// printing the particular key and value

var obj = {
  name: "john",
  age: 23,
};
console.log(obj.name);

//can we give an array in the objects?...
var resume = {
  name: "John",
  Age: 20,
  gender: "male",
  qualification: ["10th", "12th", "degeree"],
  location: "chennai",
  experience: "10years of experinence in xxx company",
  LanguagesKnown: ["tamil", "english"],
};
console.log(resume);

//for printing the key in array
var obj = {
  name: "John",
  age: 20,
  gender: "male",
 
};
for (var i = 0; i < obj.attendance.length; i++) {
  console.log(obj.attendance[i]);
}
//json array of objects
var arr=[
    {
         "name": "John",
         "age": "20"
      },
    {
         "name": "Doe",
         "age": "21"
      },
     {
         "name": "ram",
         "age": "22"
      },
    {
         "name": "rupan",
         "age": "23"
    }
 ];
 for(var i=0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].age);
 }

//Hoisting developer mistake
console.log(a);
var a= 10;
var b= 6;
console.log(b);
//scope and block variable let and const

//copy by value
var a = 23;
var b =a ;
a =24;
console.log(a);


//copy by reference 
var arr=[23,24,25,26]
var arr1 = arr;
arr1[0]=456;
console.log(arr1[0]);
