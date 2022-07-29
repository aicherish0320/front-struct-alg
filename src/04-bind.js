const obj = {
  a: 1
}

function fn() {
  console.log(this.a)
}

// const Fn = fn.bind(obj)
// Fn()

const myBind = (fn, context) => {
  return (...args) => {
    fn.call(context, ...args)
  }
}

myBind(fn, obj)()
