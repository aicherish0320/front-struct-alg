debugger
console.log('start')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
console.log('end')

/**
  程序执行，会包在一个匿名的函数中去执行，当程序中遇到异步任务时，让异步执行线程去执行，js 主线程继续往下执行。
  当异步任务执行完毕后，会把回调函数放入 callback queue （任务队列中），等待主线程调用
 */
