const intersection = (nums1, nums2) => {
  const map = new Map()

  nums1.forEach((num) => map.set(num, true))

  const ret = []
  nums2.forEach((num) => {
    if (map.get(num)) {
      ret.push(num)
      map.delete(num)
    }
  })
  return ret
}

console.log(' >>> ', intersection([1, 2, 2, 1], [2, 2]))
console.log(' >>> ', intersection([4, 9, 5], [9, 4, 9, 8, 4]))
