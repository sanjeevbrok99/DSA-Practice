// Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k. If a window does not contain a negative integer, then print 0 for that window.

// Examples:  

// Input: arr[] = [-8, 2, 3, -6, 1] , k = 2
// Output: [-8, 0, -6, -6]
// Explanation: First negative integer for each window of size 2
//                         [-8, 2] = -8
//                         [2, 3]= 0 (does not contain a negative integer)
//                         [3, -6] = -6
//                         [-6, 10] = -6

// Input: arr[] = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
// Output: [-1, -1, -7, -15, -15, 0]
// Explanation: First negative integer for each window of size 3
//                        [ 12, -1, -7] = -1
//                       [-1,-7, 8] = -1
//                      [-7, 8, -15] = -7
//                     [8, -15, 30] = -15
//                    [-15, 30, 16] = -15
//                   [30, 16, 28] = 0


function firstNegativeInWindow(arr,k){
    const n = arr.length
    const result = []
    const deque = []    
    let i=0,j=0

   while(j<n){
        if(arr[j]<0){
            deque.push(arr[j])
        }
        if(j-i+1<k){
            j++
        }
        elif(j-i+1===k)
            
            if(deque.length===0){
                result.push(0)
            }else{
                result.push(deque[0])
                if(arr[i]===deque[0]){
                    deque.shift()
                }
            }
            i++
            j++

        }
        
            return result

   }

const arr =  [12, -1, -7, 8, -15, 30, 16, 28], k = 3
console.log(firstNegativeInWindow(arr,k))