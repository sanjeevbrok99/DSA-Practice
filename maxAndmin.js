//Program to find the minimum (or maximum) element of an array

let newarr  = [ 1, 423, 6, 46, 34, 23, 13, 53, 4 ];
const findMinOrMax = (arr) => {
    for(let i = 0;i<arr.length;i++){
        for (let j = 0;j<i;j++){
            if(arr[i]>arr[i+1]){
                arr[i] = arr[i+1]
               return console.log(arr[i])
            }
            console.log("Max ELement is:",arr[i])
        }
    }
}
findMinOrMax(newarr)
// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
const newFunc = (arr1,arr2) =>{
    let a = array1.length
let b = array2.length
const c = (a>b) ?a:b
    let newArr = [];

for(let i=0;i<c;i++){
    if(!arr1[i] || !arr2[i] )
    {
        arr1[i] =  0
    }
    if(arr2[i] == undefined )
    {
        arr2[i] =  0
    }
    newArr.push(arr1[i]+arr2[i])
}
    
    console.log(newArr)
}

newFunc(array1,array2)

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

let array3 = [1, 2, 3]
let array4 = [100, 2, 1, 10]
const c = (array1.length>array2.length)?array1.length:array2.length
let mergedArray = array1.concat(array2)
console.log(mergedArray)
let newArr = [];
const a = mergedArray.filter((i)=>{
    if(!newArr.includes(i)){
      return  newArr.push(i)
    }
})
console.log(a)

for(let i = 0;i<mergedArray.length;i++){
    
}
const func = (arr1,arr2) =>{
    let newArr = []
    for(let i =0;i<c ;i++){
        if(!arr1[i]){
            arr1[i] = 0
        }
        if(arr1[i]!=arr2[i]){
            console.log(arr1[i])
            // newArr.push()
        }
    }
}
func(array3,array4)