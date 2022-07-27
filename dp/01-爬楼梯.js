const climbStairs = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  let dp1 = 1
  let dp2 = 2

  for (let i = 3; i <= n; i++) {
    let temp = dp1
    dp1 = dp2
    dp2 = dp1 + temp
  }
  return dp2
}

console.log('climbStairs(2) >>> ', climbStairs(2))
console.log('climbStairs(3) >>> ', climbStairs(3))
console.log('climbStairs(4) >>> ', climbStairs(4))
console.log('climbStairs(5) >>> ', climbStairs(5))
