// 去重
const arr = [1, 2, 1, 2]
const set = new Set(arr)
console.log('set >>> ', set)

// 判断元素是否在集合中
console.log('3 >>> ', set.has(3))
console.log('2 >>> ', set.has(2))

// 求交集
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter((item) => set2.has(item)))
console.log('set3 >>> ', set3)
