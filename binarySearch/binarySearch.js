/**
 * @param { sorted Array ,target}
 * @returns {index of the target}
 * @description Takes a sorted array and an target if the target is in the array 
 *  the functions returns index position else return false
 * @WorstBigO O(log n)
 * @AverageBigO O(log n)
 * @BestBigO O(1)
 * @space O(1)
 * @DataStructure {Array}
 * @Class Search Algorithm
 */
const mySortedArray =[2,5,8,12,16,23,38,56,72,91]
const binarySeach=(arr,target, startIndex =0,endIndex=arr.length -1)=>{
  
    let  middleIndex
      while (startIndex <= endIndex) {
          middleIndex = Math.floor((startIndex + endIndex) / 2 )
          if(arr[middleIndex] === target){
              return  console.log(`Target was found at index ${middleIndex}`);
          }else if(arr[middleIndex] < target){
              startIndex =middleIndex ++
          } else{
              endIndex =middleIndex --
          } 
      }
    return false 
}
                
binarySeach(mySortedArray,23)