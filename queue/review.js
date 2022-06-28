/*
  最近请求次数
  写一个 RecentCounter 类来计算特定时间范围内最近的请求次数
*/

class RecentCounter {
  constructor() {
    this.queue = []
  }
  ping(t) {
    this.queue.push(t)

    if (t - 3000 > this.queue[0]) {
      this.queue.shift()
    }

    return this.queue.length
  }
}

const rc = new RecentCounter()
console.log(rc.ping(1))
console.log(rc.ping(100))
console.log(rc.ping(3001))
console.log(rc.ping(3002))
