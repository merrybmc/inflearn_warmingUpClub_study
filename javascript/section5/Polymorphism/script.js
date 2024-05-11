// 클래스의 메서드는 같지만 구현이 다르다.
class PaymentGateway {
  constructor() {
    this.connect();
  }

  // PaymentGateway 전용 method 구현
  connect() {}
  pay(amount) {}
  refund(amount) {}
}

class Paypal extends PaymentGateway {
  // Paypal 전용 method 구현
  connect() {}
  pay(amount) {}
  refund(amount) {}
}

class Visa extends PaymentGateway {
  // Visa 전용 method 구현
  connect() {}
  pay(amount) {}
  refund(amount) {}
}

// 이러한 다형성 코드를 통해 더 일반적인 코드를 재사용하고 유용하게 작성 가능
