function logged(constructor: Function) {
    console.log(`Creating an instance of ${Object.getPrototypeOf(constructor).name}`);
}

@logged
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    } 
    greet2() {
        return "Hello, " + this.greeting;
    }

    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter2 = new Greeter("World");
var greeter3 = new Greeter("Oualid");
var greeter4 = new Greeter("Achrif");


function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
        const result = originalMethod.apply(this, arguments);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
}


const greeter = new Greeter("World");
console.log(greeter.greet()); //  HELLO, WORLD
