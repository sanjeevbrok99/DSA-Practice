// Find duplicates in O(n) time and O(1) extra space | Set 1
// Input: n=7 , array[]={1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6
// Explanation: The numbers 1 , 3 and 6 appears more than once in the array.

let arr = [1, 2, 3, 6, 3, 6, 1]
let newArr1 = []

let hasDuplicate = arr.some((value,i)=> {
  if(arr.indexOf(value)==i) {
      newArr1.push(value)
  } 
    
})
console.log(newArr)
let count =0;
let mf = 1;
let item;
let newArr = []
for(let i =0;i<arr.length;i++){
    for(let j =i;j<arr.length;j++){
        if(arr[i]==arr[j])
         count++
    if(count >mf){
        item = arr[i]
        newArr.push(arr[i])

        
    }
    }

    count =0
   
}

 console.log(`duplicates numbers are in the array are ${newArr}`)