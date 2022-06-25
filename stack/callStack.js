function a() {
  b()
  console.log('a')
}

function b() {
  c()
  console.log('b')
}

function c() {
  console.log('c')
}

debugger
a()
