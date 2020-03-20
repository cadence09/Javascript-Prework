// Sortin' & Searchin'
    //1. insertion sorting
    function insertionSort(array){
        for (var i=1;i<array.length;i++){
          for (var j=0;j<i; j++){
            if(array[i]<array[j]){
              var temp=array.splice(i,1);
              array.splice(j,0,temp[0]);
            }
          }
        }
        return array
      }
      console.log(insertionSort([8,7,6,9,5]))

//Has Table
    //Two Sum
    function twoSum(array, target) {

        var index = [];
        var hashTable = {};

        for (var i = 0; i < array.length; i++) {
           
        }
        return index
    }

    twoSum([1,2,3,5],7);