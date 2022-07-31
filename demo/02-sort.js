const data = [5, 7, 9, 4]

//! 冒泡排序
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
// bubbleSort(data)
//! 选择排序
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}
// selectionSort(data)
//! 插入排序
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i
    while (j > 0) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
      j--
    }
    arr[j] = temp
  }
}
// insertionSort(data)
//! 归并排序
const mergeSort = (arr) => {
  const rec = (arr) => {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    const orderLeft = rec(left)
    const orderRight = rec(right)

    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        )
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const ret = rec(arr)
  console.log('ret >>> ', ret)
}
// mergeSort(data)
//! 快速排序
const quickSort = (arr) => {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mid) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const ret = rec(arr)
  console.log('ret >>> ', ret)
}

quickSort(data)
// console.log(data)
