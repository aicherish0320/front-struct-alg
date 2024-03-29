// 最少最近使用
class LRUCache {
  capacity: number
  cache: Map<number, number | null>
  constructor(capacity: number) {
    this.capacity = capacity
  }
  get(key: number): number {
    if (this.cache.has(key)) {
      const temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    }
    return -1
  }
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }
}
