/**
 * 最近的请求次数（933）
 * [[1], [100], [3001], [3002]] -> [1, 2, 3, 3]
 * 解题思路：
 * 1. 越早发出的请求越早不在最近
 * 2. 满足先进先出，考虑用队列
 */

var RecentCounter = function () {
  this.q = []
}
RecentCounter.prototype.ping = function (t) {
  // 将每次请求的时间入队
  this.q.push(t)

  while (t - 3000 > this.q[0]) {
    this.q.shift()
  }

  return this.q.length
}

const rc = new RecentCounter()
debugger
const ret1 = rc.ping(1)
const ret2 = rc.ping(100)
const ret3 = rc.ping(3001)
const ret4 = rc.ping(3002)

console.log(ret1, ret2, ret3, ret4)
