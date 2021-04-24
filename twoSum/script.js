// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {


    for (let i = 0; i < nums.length; i++) {
        let v = target - nums[i]
        let answer

        nums.forEach(item => {

            if (v == item && nums.indexOf(v) != nums.lastIndexOf(nums[i])) {

                answer = [nums.indexOf(v), nums.lastIndexOf(nums[i])]
                console.log(answer)
                return answer
            }

        })
        if (answer) {
            return answer
        }


    }
};





// let nums = [2, 7, 11, 15]
let nums = [3, 2, 4]
// let nums = [3, 3]

twoSum(nums, 6)
