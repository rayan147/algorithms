/**
 * @param { unsorted Array }
 * @returns {sorted Array}
 * * @property arr.keys() is need because we need the indexes not the values
 * @description selection sort is an algorithm that needs to go thru the entire list O(n^2) 
quadratic time 
 */
//V1
const selectionSort_v1=(arr)=>{
    for (let i of arr.keys()) {
        let indexOfMin = i; //  storing the index of indexOfMinimum element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
         // swap and continue
        if (i !== indexOfMin) {
            // is like saying const [a, b] = [30, 40]
          [arr[ i ],arr[indexOfMin]]= [arr[indexOfMin],arr[ i ]];
        }
    }
    return arr
  }

//V2
const selectionSort_v2=(arr)=>{
const swap = (arr,firstIndex,secondIndex) => ([arr[firstIndex],arr[secondIndex]]= [arr[secondIndex],arr[ firstIndex]])
    for(let i of arr.keys()){
        let indexOfMin = i 
        for(let j=i+1; j<arr.length;j++){
            if (arr[indexOfMin] > arr[j]) {
            indexOfMin = j;
          }
        }
          if(i !== indexOfMin) swap(arr,i,indexOfMin)    
          
    }
    return arr
}

const my_unsortedArray = [4,52,5,2,67,45,12]
const ss =selectionSort_v2(my_unsortedArray);
console.log(ss)