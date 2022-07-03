let json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}

const path = ['a', 'b', 'c']

// 创建一个指针 p，指向 json
let p = json

path.forEach((k) => {
  p = p[k]
})

console.log(p)
