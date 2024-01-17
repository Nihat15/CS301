    let fullName = 'Ulfat Zakirli Rovshen'

    console.log(fullName.split(" "))  //1
    
    let nameArray=fullName.split(" ") //2 ve 3

    let modifiedFullName = nameArray[1] + ' ' + nameArray[0] + ' ' + nameArray[2];
    console.log(modifiedFullName)

    let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


    let fivecount = 0                          //4
    for(let i=0; i<arr.length; i++){
        if(arr[i]==5){
         fivecount +=1
        }
    }
    console.log(fivecount)

    
    let sum = 0                          //5
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
         
    }
    console.log(sum)  
    
    
    
    let repeated=[]                      //6
    for(i=0;i<arr.length;i++){
if(arr.slice(i+1, arr.length).includes(arr[i]) && !repeated.includes(arr[i])){
repeated.push(arr[i]);
}
    }
    repeated.sort()   
console.log(repeated)



let max = 0    //7
for(i=0; i<repeated.length; i++){
    if(repeated[i]>max){
    max=repeated[i]
    }
}
console.log(max)

let maxcount = 0
for(i=0;i<arr.length; i++){
    if(arr[i]==max){
    maxcount+=1
    }
}
console.log(maxcount)



let myname= "Nihat"  //8
console.log(myname.length)
for(i=0; i<arr.length; i++){
if(arr[i]==myname.length)
console.log("adinizdaki herflerin sayi arrayda var")
}

let a=0   //9
for(i=0; i<arr.length; i++){
    if(arr[i]%3==2){
 a=arr[i]
break
    }
}
console.log(a)
console.log(i)


for(i=0; i<arr.length; i++){    //10
    if(arr[i]==max){
break
    }

}
console.log(i) 



for(i=0; i<arr.length ;i++){   //11
    if(arr[i]==4){
    console.log(i)
    }
}


let indexler= [];          //12
for(i=0; i<arr.length ;i++){  
    if(arr[i]==5){
        indexler.push(i)
    }
}
indexler.sort((a, b) =>(a-b))
console.log(indexler[0] + " "+ "-" +"en kicik indeks")
console.log(indexler[indexler.length-1]+ " "+ "-"+ "en boyuk indeks")   


let biggerFromtwo = []     //13
for(i=0; i<arr.length; i++){
if(arr[i]>2){
    biggerFromtwo.push(arr[i])
}

}
console.log(biggerFromtwo)
console.log(arr.length-biggerFromtwo.length)


sumOfIndex = 0    //14
for(i=0; i<arr.length; i++){
    if(arr[i]==7){
sumOfIndex+=i
    }
}
console.log(sumOfIndex)


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]





let newArray =[]                //16

for(i=0; i<arr2.length; i++){
    if(arr2[i].name.startsWith("t")){
        newArray.push(arr2[i])
    }
}
console.log(newArray)





let newArray2 =[]                 //17
for(i=0; i<arr2.length; i++){
    if(arr2[i].name.startsWith("t") && arr2[i].name.endsWith("t")){
        newArray2.push(arr2[i])
    }
}
console.log(newArray2.length)

 sum = 0                         //18
for(i=0; i<newArray2.length; i++){
    sum+=newArray2[i].key;
}
console.log(sum)




for(i=0; i<arr2.length; i++){                //19
    if(arr2[i].name.endsWith("e")){
        arr2[i].name = "SuperDev"
    }
}
console.log(arr2)


let maxLength = 0;                          //20
let maxKey= 0 ;

for (i = 0; i < arr2.length; i++) {     
    if (arr2[i].name.length > maxLength) {
        maxLength = arr2[i].name.length;
        maxKey = arr2[i].key;
    }
}


let maxLength2 = 0;          //21
let maxIndexSquare;

for ( i = 0; i < arr2.length; i++) {
    if (arr2[i].name.length > maxLength) {
        maxLength = arr2[i].name.length;
        maxIndexSquare = i * i;
    }
}

console.log(maxIndexSquare);




console.log(maxKey);


let newArray3 = [];            //22

for ( i = 0; i < arr2.length; i++) {
    if (arr2[i].name.length == 4) {
        newArray3.push(arr2[i]);
    }
}

console.log(newArray3);






let maxKey2 = 0;                    //23
let maxName;

for ( i = 1; i < arr2.length; i++) {
    if (arr2[i].key > maxKey) {
        maxKey = arr2[i].key;
        maxName = arr2[i].name;
    }
}

console.log(maxName);



