// Ejercicio 1
(function() {
    interface Person  {
        name: string;
        age: number;
        profession: string;
    }
    
    let valProp = (persona:Person):string[] => {
        let result:string[] = [];
        for (let prop in persona) {
            result.push(persona[prop]);
        }
        return result;
    }
    
    const objPerson: Person = {
        name: "Jane",
        age: 32,
        profession: "Dev"
    }
    console.log(valProp(objPerson));
})();

// Ejercicio 2
(function() {
    let sumOrConcatnate = (x: number | string, y: number | string) => {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        } else if ( (typeof x === "number" && typeof y === "string") || (typeof x === "string" && typeof y === "number")) {
            return x.toString() + ":" + y.toString();
        } else {
            return x.toString() + "-" + y.toString();
        }
    }

    console.log(sumOrConcatnate(4, 3));
    console.log(sumOrConcatnate(4, "hello"));
    console.log(sumOrConcatnate("hello", 4));
    console.log(sumOrConcatnate("hello", "world"));
})();   

// Ejercicio 3
(function() {
    interface Car {
        tires: number;
        turnOnEngine: () => void;
        pressPedal: () => void;
    }

    interface Motorcycle {
        tires: number;
        turnOnEngine: () => void;
        openThrottle: () => void;
    }

    function getVehicle(vehicle: Car | Motorcycle) {
        if ("turnOnEngine" in vehicle) {
            return vehicle.turnOnEngine();
        }
    }

    let vehicle1: Car = {
        tires: 4,
        turnOnEngine: function(){
            return console.log("turnOnEngine");
        },        
        pressPedal: function(){
            return console.log("pressPedal");
        }
    };

    let vehicle2: Motorcycle = {
        tires: 2,
        turnOnEngine: function(){
            return console.log("turnOnEngine");
        },        
        openThrottle: function(){
            return console.log("openThrottle");
        }
    };

    getVehicle(vehicle1);

    function isCar(vehicle: Car | Motorcycle): vehicle is Car {
        return (vehicle as Car).pressPedal !== undefined;
    }

    if (isCar(vehicle1)) {
        vehicle1.pressPedal();
    }
    
    getVehicle(vehicle2);

    function isMotorcycle(vehicle: Car | Motorcycle): vehicle is Motorcycle {
        return (vehicle as Motorcycle).openThrottle !== undefined;
    }

    if (isMotorcycle(vehicle2)) {
        vehicle2.openThrottle();
    } 
   
})();   

// Ejercicio 4
(function() {
    const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
    const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
    const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];


    let removeFirstEntry = (array : Array<number|string>) : Array<number|string> => {
        // array.splice(0,1);
        // return array;

        array.shift();
        return array;
    }


    const newStrArray = removeFirstEntry(strArray);
    const newNumArray = removeFirstEntry(numArray);
    const newMixedArray = removeFirstEntry(mixedArray);
    // const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

    console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
    console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];

    // por otro lado si el array fuera de tipo any, el 4 caso funcionaria sin problema
    let removeFirstEntry_other = (array : Array<any>) : Array<any> => {
        // array.splice(0,1);
        // return array;

        array.shift();
        return array;
    }

    const newUnsupportedArray = removeFirstEntry_other(unsupportedArray);
    console.log(newUnsupportedArray);
})();