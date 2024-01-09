/* To solve this problem, cycle through each element 
in the array and determine the difference between
 the goal and the number that is currently being processed.
To make it easier to verify if the processed items are present 
in the map each time the new difference is calculated,
 let's store the processed items and their index in a map 
 called numbers[i], i).
Take, for instance, 2 and 7. Below are the distinctions between them and the sequence
 in which they will be handled: 1. 9 - 2 = 7, 2. 9 - 7 = 2
 9 - 2 is handled first. Check the map to see whether there is an element with key 7 
 because the difference is 7. Not yet in this instance. But pair, storage 2, 0.
The following pair to be handled is 9 - 7. Verify if there are two on the map. As it exists in this instance,
 extract the index that has been allocated to it and produce
  an array as a consequence.
*/

var twoSum = function(nums, target) {
    let numIndexMap = new Map();
    
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        let complement = target - nums[currentIndex];
        
        if (numIndexMap.has(complement)) {
            return [currentIndex, numIndexMap.get(complement)];
        }
        
        numIndexMap.set(nums[currentIndex], currentIndex);
    }
};