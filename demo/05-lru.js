// least recently used 最少最近使用
class LRU {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }
  get(key) {
    if (this.cache.has(key)) {
      const temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    }
    return -1
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }
}

const lru = new LRU(3)
lru.put(1, 1)
lru.put(2, 2)
lru.put(3, 3)
lru.get(1)
lru.put(4, 4)
lru.put(5, 5)
