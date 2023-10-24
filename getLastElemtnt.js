// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

const func = (arr,n) =>{
    let a 
    if(n>arr.length){
        a = 0
    } if(!n){
        a = arr.length -1
    }else
    a = arr.length - n
    console.log(a)
    let newArr = []
    //  if(!n){
    //         console.log(arr[arr.length])
    //     }
    for(let i =a;i<arr.length;i++){
       
         newArr.push(arr[i])
    }
    return newArr
}

let array= [7, 9, 0, -2]
 console.log(func(array))




// console.log(array[0])
const func1 = (arr) =>{
    return arr.filter((x)=>{
         return (x!=0&& x!=false && x!='' && x!=undefined && !Number.isNaN(x))
     })
 }
 let array1 = [NaN, 0, 15, false, -22, '',undefined, 47, null]
 console.log(func1(array1))