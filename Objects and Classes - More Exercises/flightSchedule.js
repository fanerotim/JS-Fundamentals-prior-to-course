function flightSchedule(arr) {

    let initialFlights = [];
    let status = arr[2].join(' ');

    arr[0].forEach(data => {
        data = data.split(' ');
        flight = data.shift();
        data = data.join(' ');
        let destination = data;
        // let [flight, destination] = data.split(' ');
        initialFlights.push({ flight, destination });
    })

    arr[1].forEach(flight => {
        // let [flightUpdate, destinationUpdate] = flight.split(' ');
        flight = flight.split(' ');
        let flightUpdate = flight.shift();
        flight = flight.join(' ');
        let destinationUpdate = flight;
        
        for (let i = 0; i < initialFlights.length; i++) {
            let currentFlight = initialFlights[i];

            if (currentFlight.flight === flightUpdate) {
                initialFlights[i].status = destinationUpdate;
            }
        }
    })
    
    initialFlights.forEach(flight => {
        if (flight.hasOwnProperty('status') && status !== 'Ready to fly') {
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        } else if (status === 'Ready to fly') {
            if (!flight.hasOwnProperty('status')) {
                console.log(`{ Destination: '${flight.destination}', Status: 'Ready to fly' }`);
            }
        }
    })
}

// flightSchedule([
//     ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
//     ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
//     ['Cancelled']]);

flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama','WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], 
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], 
    ['Ready to fly']]);