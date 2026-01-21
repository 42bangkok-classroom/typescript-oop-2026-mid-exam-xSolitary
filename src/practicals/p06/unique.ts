export{};
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  let arr3=[];
  for (let i=0;i<arr1.length;i++) {
    for(let y=0;y<arr2.length;y++){
      if (arr1[i] !== arr2[y]){
        arr3.push(arr2[y]);
      }
    }
    

    
  }
  return arr3;
}
console.log(getUniqueNumbers(arr1,arr2))

