class Boy {
  speak() {
    console.log(`I am ${this.fullName} and i am ${this.age} years old.`);
  }

  get age() {
    return 9;
  }

  get fullName() {
    return 'Maximus Araujo';
  }
}

const Maximus = new Boy();
Maximus.speak();
