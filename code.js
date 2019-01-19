class Boy {
  speak() {
    console.log(`I am  ${this.fullName} and I am ${this.age} years old`);
  }

  get age() {
    return '6';
  }

  get fullName() {
    return 'Gavin Araujo';
  }
}

const Gavin = new Boy();
Gavin.speak();