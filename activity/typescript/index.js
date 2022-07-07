// Ejercicio 1
(function () {
    var valProp = function (persona) {
        var result = [];
        for (var prop in persona) {
            result.push(persona[prop]);
        }
        return result;
    };
    var objPerson = {
        name: "Jane",
        age: 32,
        profession: "Dev"
    };
    console.log(valProp(objPerson));
})();
// Ejercicio 2
(function () {
    var sumOrConcatnate = function (x, y) {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        else if ((typeof x === "number" && typeof y === "string") || (typeof x === "string" && typeof y === "number")) {
            return x.toString() + ":" + y.toString();
        }
        else {
            return x.toString() + "-" + y.toString();
        }
    };
    console.log(sumOrConcatnate(4, 3));
    console.log(sumOrConcatnate(4, "hello"));
    console.log(sumOrConcatnate("hello", 4));
    console.log(sumOrConcatnate("hello", "world"));
})();
// Ejercicio 3
(function () {
    function getVehicle(vehicle) {
        if ("turnOnEngine" in vehicle) {
            return vehicle.turnOnEngine();
        }
    }
    var vehicle1 = {
        tires: 4,
        turnOnEngine: function () {
            return console.log("turnOnEngine");
        },
        pressPedal: function () {
            return console.log("pressPedal");
        }
    };
    var vehicle2 = {
        tires: 2,
        turnOnEngine: function () {
            return console.log("turnOnEngine");
        },
        openThrottle: function () {
            return console.log("openThrottle");
        }
    };
    getVehicle(vehicle1);
    function isCar(vehicle) {
        return vehicle.pressPedal !== undefined;
    }
    if (isCar(vehicle1)) {
        vehicle1.pressPedal();
    }
    getVehicle(vehicle2);
    function isMotorcycle(vehicle) {
        return vehicle.openThrottle !== undefined;
    }
    if (isMotorcycle(vehicle2)) {
        vehicle2.openThrottle();
    }
})();
// Ejercicio 4
(function () {
    var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    var numArray = [1, 2, 3, 4, 5, 6, 7];
    var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
    var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
    var removeFirstEntry = function (array) {
        // array.splice(0,1);
        // return array;
        array.shift();
        return array;
    };
    var newStrArray = removeFirstEntry(strArray);
    var newNumArray = removeFirstEntry(numArray);
    var newMixedArray = removeFirstEntry(mixedArray);
    // const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
    console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
    console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
    // por otro lado si el array fuera de tipo any, el 4 caso funcionaria sin problema
    var removeFirstEntry_other = function (array) {
        // array.splice(0,1);
        // return array;
        array.shift();
        return array;
    };
    var newUnsupportedArray = removeFirstEntry_other(unsupportedArray);
    console.log(newUnsupportedArray);
})();
