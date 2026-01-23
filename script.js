// console.log("Hello world!");

// var a=10;
// console.log(a);

// let b=20;
// console.log(b);

// const c=30;

// console.log(c);

// var a=10;
// var str = "maha";
// // var bool = true;
// var un;
// var n = null;
// var big = 9007199254740991n;
// var sym = Symbol("id");

// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof n);
// console.log(typeof big);
// console.log(typeof sym);


// var a=10;
// var b="20";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// var a=10;
// var b=20;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// var a=10;
// var b="10";
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);



// a=true;
// b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);



// var  arr=[10,20,30,40,50];
// console.log(arr);
// console.log(typeof arr);

// var obj = {
//     name: "Maha",
//     age: 20}
// console.log(obj);
// console.log(typeof obj);


// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }



// let i=1;
// do{
//     console.log('do.... while');
// }
// while(i===0);


// let marks = 70;
// if(marks>=90)
//     console.log("0 grade");
// else if(marks>=80)
// //     console.log("A grade");
// // else if(marks>=70)
// //     console.log("B grade");
// // else
// //     console.log("C grade");

// // i=8;
// // let result = (i%2==0)?"even":"odd";
// // console.log(result);


// // var [m1,m2,m3]=[10,20,30];
// // console.log(m1);
// // console.log(m2);
// // console.log(m3);




// //for....in loop
// let arr =[10,20,30,40,50];
// // for(let i in arr){
// //     console.log(i,arr[i])
// // }

// // var obj={
// //     name:"maha",
// //     age:20,
// // }
// // for(let i in obj)
// // {
// //     console.log(i,obj[i]);
// // }






// //for(variable variable_name of array_name


// // for(let val of arr){
// //     console.log(val)
// // }



// // //map
// // arr=[10,20,30,40,50];
// // var double_arr=arr.map((i)=>(i*2));
// // console.log(double_arr);

// // //filter
// // var even = arr.filter((i)=>(i%2==0));
// // console.log(even);

// // //reduce
// // var total = arr.reduce((sum,i)=>(sum+i),0);
// // console.log(total);


// //check prime number
// var a=7;
// var flag  =true;
// if(a<=1) flag =false;
// else{
//     for(let i=2;i<=a/2;i++)
//     {
//         if(a%i===0)
//         {
//             flag= false;
//             break;


//         }
//     }
// }
// console.log(flag?"prime":"not prime");


// var name="maha";
//console.log(`My name is ${name}`);



//for each
// arr=[10,20,30,40,50];
// arr.forEach((value,index)=>{
//     console.log(index,value);
// // })

//  var add = (a,b,callback)=>{
//      var result=a=b;
//      callback(result);
//  }


//  add(10,20,(res)=>{console.log(res);})

// var demo = ()=>
// {
//     console.log("I am callBack");

// }
// var main =(myfunction)=>
// {

// }
// main(demo)


// var promise = new Promise((resolve,reject)=>{
//     var success = false;
//     if(success)
//     {
//         resolve("promise resolved");
//     }
//     else{
//         reject("promise rejected");
//     }
//     }
// )
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// const getData = ()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')

// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));
