
// Two Sum Optimal Solution using Hashmap  

const TwoSum= function GetTwoSum(nums,target){
    const numsMap= {};
  for(let p=0;p<nums.length;p++){
    const currentMapVal = numsMap[nums[p]];
    if(currentMapVal >=0){
      return [currentMapVal,p];
    }else {
      const numberToFind= target- nums[p];
      numsMap[numberToFind] =p;
      
    }
  }
}

const nums=[1,3,7,9,2,10];

const result=TwoSum(nums,11);


console.log(result);
