const twoSum = (nums, target) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const num2 = target - num
    if (!map.has(num2)) {
      map.set(num, i)
    } else {
      return [map.get(num2), i]
    }
  }
}

console.log(' >>> ', twoSum([2, 7, 11, 15], 9))
console.log(' >>> ', twoSum([3, 2, 4], 6))
console.log(' >>> ', twoSum([3, 3], 6))
