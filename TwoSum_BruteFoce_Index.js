
// Two Sum Brute Force way

const TwoSum= function GetTwoSum(nums,target){

  for(let p1=0;p1<nums.length;p1++){
    const numberToFind= target-nums[p1];
    for(let p2=p1+1;p2<nums.length;p2++){
      if(numberToFind==nums[p2])
        return [p1,p2];
    }
  }
}

const nums=[1,3,7,9,2,10];

const result=TwoSum(nums,19);


console.log(result);


//Result [3,5]
