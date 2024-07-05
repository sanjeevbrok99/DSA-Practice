const binarySearch = (arr,left,right,x) => {
    
    if(right>=left){
        let mid = left + Math.floor((right - left) / 2);
    if(arr[mid] === x){
        return mid;
    }
    if(arr[mid]>x){
        return binarySearch(arr,left,mid-1,x);
    }
    if(arr[mid]<x){
        return binarySearch(arr,mid+1,right,x);
    }
}

}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let result = binarySearch(arr, 0, arr.length - 1, x);
if(result === -1){
    console.log("Element is not present in array");
}else{
    console.log("Element is present at index", result);
}