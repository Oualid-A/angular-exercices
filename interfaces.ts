
// ex8
interface Vehicule {
    make: string;
    model: string;
    year?: number;
  }
  function createVehicule(obj: Vehicule): Vehicule {
    return obj;
  }
  
  // ex9
  interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
  }
  
  function updatePerson(obj: Person, newPerson: { firstName: string , lastName: string }): Person {
    return {...obj, ...newPerson};
  }
  
  // ex10
  interface Circle {
    // readonly centerX: number,
    // readonly centerY: number,
    centerX: number;
    centerY: number;
    readonly radius: number;
  }
  function moveCircle(obj: Circle) {
    obj.centerX = 100;
    obj.centerY = 100;
  }
  