/**
 * @param { unsorted Array }
 * @returns {sorted Array}
 * * @property arr.keys() is need because we need the indexes not the values
 * @description selection sort is an algorithm that needs to go thru the entire list O(n^2) 
quadratic time 
 */

const selectionSort=(arr)=>{
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

