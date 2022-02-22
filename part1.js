//Ahmet Yusuf Yılmaz Ödev 1.Hafta Part-1

function targetSum(nums, target) {
  let result = "";
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result += `[${i},${j}]\n`;
        result += `Çünkü ${nums[i]} + ${nums[j]} == ${target}, return ${[ i,j,]}.`;
      }
    }
  }
  return result;
}

console.log(targetSum([2, 7, 11, 15], 9));
console.log(targetSum([3, 2, 4], 6));
console.log(targetSum([3, 3], 6));

//BigO Notation: Time = O(N^2)