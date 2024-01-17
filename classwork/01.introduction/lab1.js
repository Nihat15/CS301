// console.log(12/8) //1

// let x = 10/2  //2
// console.log(x)  

// let num1 = 20  //3
// let num2 = 17

// console.log(num1 + num2)


// // let name = "Nihat"   //4
// // let surname ="Mehdiyev"
// // let year = "2005"

// // info = name + ' ' + surname + ' ' + year

// // console.log(info) 

// // console.log(17%12)  //5

// //  city_name = "Baku"  //6 

// // console.log(city_name)

// //TASK 2

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // c=a+1
// console.log(d); // d=b (amma sonradan ustune 1 gelir)
// console.log(b); // b=1

// //TASK 3

// // let a = 2;
// // let x = 1 + (a *= 2);
// // console.log(x); // x= 1+4=5

// //TASK 4

// console.log('test1', test); // let scop-u qira bilmir deyey test1 undefined verecek
// {
//     let test = "something"
//     console.log('test2', test); // test 2 something verecek cunki test teyin olunub
// }
// console.log('test3', test);  // scope baglanib deye yene test3 undefined verecek

// console.log('test1', test);  // test1 undefined verecek
// {
//     var test = "something"
//     console.log('test2', test); // test2 something verecek
// }
// console.log('test3', test); // var scop-u qira bilir deye test3 something verecek


// //TASK 5

// // Find the type of all the following cases
// let Zakirli;    
// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']


// console.log(typeof(name))
// console.log(typeof(surname))
// console.log(typeof(year))
// console.log(typeof(city))
// console.log(typeof(qualification))
// console.log(typeof(obj))
// console.log(typeof(arr))

// //TASK 6

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]  //1

// let sum = 0
// for (let i=0; i<arr1.length; i++){
//       sum+=arr1[i]
// }
// console.log(sum)

// arr1.push(10,88)      //2
// console.log(arr1)

// arr1.shift()  //3

// // arr1.unshift(0,9,11)  //4

// // arr1.shift(0, 1, 2, 3)



// // 1.Sum all the numbers in 'arr1'
// // 2.Add two numbers (10,88) to end of arr1 (push methods)
// // 3.Remove first two numbers from arr1
// // 4.Add three numbers (0,9,11) in front of arr1(unshift)
// // 5.Remove four numbers in front of arr1(shift)

const users = [
    {
        id: 1,
        username: 'Yaqut',
        age: 26,
    },
    {
        id: 2,
        username: 'Nezrin',
        age: 20,
    },
    {
        id: 3,
        username: 'Yaqub',
        age: 26,
    },
    {
        id: 4,
        username: 'Murad',
        age: 29,
    },
    {
        id: 5,
        username: 'Tural',
        age: 23,
    },
    {
        id: 6,
        username: 'Murad',
        age: 30,
    },
]


let result = 1
for(i=0;i<users.length; i++){
    if(users[i].age>=25){
    result*= users[i].age
    }
}
console.log(result)


let sum = 0

for(i=0;i<users.length;i++){
    if(users[i].username.startsWith('Y') || users[i].username.startsWith('M')){
        sum+= i
    }
}

console.log(sum)


let cuthasili = 1
for(i=0;i<users.length;i++){
    if(users[i].id % 2 == 0){
cuthasili*= users[i].id
    }
}

let teklercemi = 0
for(i=0;i<users.length;i++){
    if(users[i].id % 2 == 1){
        teklercemi+= users[i].id
    }
}

console.log(cuthasili - teklercemi)