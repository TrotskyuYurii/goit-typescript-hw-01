// function merge (objA, objB) {
//       return Object.assign(objA, objB);
//     }
    

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return { ...objA, ...objB };
  }