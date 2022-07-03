/*
  给定两个数组 nums1 和 nums2 ，返回他们的交集。输出结果中的每个元素一定是唯一的。
*/

const nums1 = [2, 1, 2]
const nums2 = [2, 3, 3]

const set2 = new Set([...nums2])
const ret = new Set([...nums1].filter((item) => set2.has(item)))
console.log(ret)
