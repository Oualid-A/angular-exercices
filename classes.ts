// ex11
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  constructor(theName: string) {
    super(theName);
  }

  move(distanceInMeters: number = 0) {
    super.move(distanceInMeters);
  }
}
let dog = new Dog("Fido");
dog.move(4);

// ex12

class Person1 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}

let p = new Person1("Oualid");
// console.log(p.name); // Property 'name' is private and only accessible within class 'Person'
console.log(p.getName());
