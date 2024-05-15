/**
 * Singleton Pattern
 *
 * 클래스의 인스턴스화를 하나의 객체로 제한하는 디자인 패턴
 * 하나의 작업을 조정하는데 정확히 하나의 객체가 필요한 경우에 유용
 * 고전적으로 Singleton 패턴은 클래스가 존재하지 않는 경우 새 인스턴스를 생성하는 메서드로 클래스를 생성하여 구현
 * 인스턴스가 이미 존재하는 경우 해당 개체에 대한 참조를 반환
 */

// 1. 생성자에서 하나의 인스턴스만 생성될 수 있게 로직 작성
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('하나의 인스턴스만 생성 가능');
    }
    this.counter = 0;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }
}

const singletonCounterA = new Counter();

singletonCounterA.increment();

console.log(singletonCounterA.getCount());

singletonCounterA.decrement();

// 단일 책임 원칙과 유사한 패턴이다.
