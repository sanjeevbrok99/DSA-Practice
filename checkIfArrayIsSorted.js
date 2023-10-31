// Given an array of size n, write a program to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.

// Examples: 

// Input : 20 21 45 89 89 90
// Output : Yes

const isSorted = (arr) =>{
    for(let i = 0;i<arr.length;i++){
        for(let j = i+ 1;arr.length;j++){
            if(arr[j]<arr[i])
                return false;
                else
                    return true

        }
    }
}

let array = [20, 21 ,45 ,89 ,89 ,90]
console.log(isSorted(array))