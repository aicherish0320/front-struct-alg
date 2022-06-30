const fn = (instance, Ctor) => {
  let proto = instance.__proto__
  while (proto) {
    if (proto === Ctor.prototype) {
      return true
    } else {
      proto = proto.__proto__
    }
  }
  return false
}

function Person() {}

const p = new Person()

function Man() {}

Man.prototype = new Person()

const man = new Man()

console.log(fn(man, Person))
console.log(man instanceof Person)
