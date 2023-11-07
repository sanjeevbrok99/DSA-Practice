// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// Output: 5, 2

const func = (arr)=>{
    let a = []
    let first_leader = arr[arr.length-1]
    console.log(first_leader)
    a.push(first_leader)
    for(let i = arr.length-2;i>=0;i--){
        if(first_leader<arr[i])
    {
         first_leader = arr[i]
         a.push(first_leader)
        console.log(first_leader)
    }
       
        
        
        // let j;
        // for( j =i+1;j<arr.length;j++){
        //     if(arr[i]<=arr[j])
        //     break
        // }
        // if( j == arr.length)
        
        // console.log(arr[i])
        
    }return console.log(a)

}
let array = [16, 17, 4, 3, 5, 2]
func(array)