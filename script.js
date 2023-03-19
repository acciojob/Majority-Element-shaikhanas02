//your code here
function majority(){
	let max = 0, count=0;
	for(let i=0; i<nums.length; i++){
		if(count == 0) max = nums[i]; //  2,
		if(nums[i] == max) count++; // 1,
		else count--;
	}
	return max;
}