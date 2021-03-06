class A{
  constructor() {
    this.number = 0;
  }

  setNumber(num, m) {
    this.number = num;
    if(m) {
      m.setB();
    }
  }
}

class B{
  constructor() {
    this.number = 0;
  }

  setNumber(num, m) {
    this.number = num;
    if(m) {
      m.setA();
    }
  }
}

class Mediator{
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  setA() {
    let number = this.b.number;
    this.a.setNumber(number * 10);
  }

  setB() {
    let number = this.a.number;
    this.b.setNumber(number / 10);
  }
}


let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(10, m)
console.log(a.number, b.number)
b.setNumber(10, m)
console.log(a.number, b.number)

/**
 *
 * 场景例子
     系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象
     想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。
 */

/**
 * 优点
     使各对象之间耦合松散，而且可以独立地改变它们之间的交互
     中介者和对象一对多的关系取代了对象之间的网状多对多的关系
     如果对象之间的复杂耦合度导致维护很困难，而且耦合度随项目变化增速很快，就需要中介者重构代码
 * */

/**
 * 缺点
      系统中会新增一个中介者对象，因 为对象之间交互的复杂性，转移成了中介者对象的复杂性，
      使得中介者对象经常是巨大的。中介 者对象自身往往就是一个难以维护的对象。
 * */
