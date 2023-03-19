//your code here
function majorityElement(nums) {
  let count = 0;
  let candidate = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
      }
    }
  }
  
  // Count the occurrences of the candidate element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }
  
  // Check if the candidate element appears more than floor(n/2) times
  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  } else {
    return -1; // Return -1 if the majority element doesn't exist
  }
}
