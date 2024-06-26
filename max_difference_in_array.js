// Input : arr = {2, 2, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.
// Method:1

// const func = (arr)=>{
//     let max_diff = 0;
//     for(let i =0 ;i<arr.length;i++){
//         for(let j =i+1;j<arr.length;j++){
//             if((arr[j]-arr[i])>max_diff)
//             max_diff = arr[j]-arr[i]
//         }
//     }return console.log(max_diff)
// }

// let array = [7, 9, 5, 6, 3, 2]
// func(array)


// // Method:2
// const funct = (arr)=>{
//     let max_diff = arr[1]-arr[0];
//     let min = arr[0]
//     for(let i =0 ;i<arr.length;i++){
//        if(arr[i]-min>max_diff){
//            max_diff = arr[i]-min
//        } 
//        if(arr[i]<min){
//            min = arr[i]
//        }
//     }return console.log(max_diff)
// }




// const findMaxDiff = (array)=>{
//     const n = array.length;
//     let maxDiff = 0;
//     for (let i=0; i<n;i++) {
//         for(j=i+1; j<n;j++) {
//             if(array[j]>array[i] && array[j]-array[i]>maxDiff) {
//                 maxDiff = array[j] - array[i];
//             }
//         }
//     }
//     console.log(maxDiff)

// }

const findMaxDiff = (arr)=>{

    if (arr.length < 2) {
        console.log(0); // No possible difference if the array has less than 2 elements
        return;
    }
    let minElement = arr[0];

 let max = arr[1]-arr[0];

 for(let i=1; i<arr.length; i++){
    if(arr[i]-minElement >max ){
        max = arr[i]-minElement
   
 }
 if(arr[i]<minElement){
     minElement = arr[i]
 }

}
return console.log(max)
}
let array1 = [7, 9, 5, 6, 3, 2]
findMaxDiff(array1)