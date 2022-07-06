const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(2)

mySet.add('Hello')

const o = { a: 1 }
mySet.add(o)

mySet.add({ a: 1 })

// console.log(mySet.has(o)) // true
// console.log(mySet.has({ a: 1 })) // false

// mySet.delete({ a: 1 })
// mySet.delete(o)

// console.log('mySet >>> ', mySet)

// for (const iterator of mySet) {
//   console.log(iterator)
// }

// for (const [key, value] of mySet.entries()) {
//   console.log(key, value)
// }

// for (const iterator of mySet.values()) {
//   console.log(iterator)
// }

// 集合转数组
// console.log(Array.from(mySet))
// 数组转集合
// console.log(new Set([1, 2, 3]))
