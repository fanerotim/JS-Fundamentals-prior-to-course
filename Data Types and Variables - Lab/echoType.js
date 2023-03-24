function echoType(input) {

    let result = typeof input;

    switch(result) {
        case "number": {
            console.log(result);
            console.log(input);
        }
        break;
        case "string": {
            console.log(result);
            console.log(input);
        }
        break;
        default:
            console.log(result);
            console.log("Parameter is not suitable for printing");
    }
} 

echoType('Hello, JavaScript!');
echoType(18);