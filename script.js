function getLatestMission() {
  axios
    .get('https://api.spacexdata.com/v3/launches/latest')
    .then(function (response) {
      const missionName = response.data.mission_name,
        rocket = response.data.rocket,
        launchDate = response.data.launch_date_utc,
        details = response.data.details,
        flightNumber = response.data.flight_number,
        launchSuccess = response.data.launch_success,
        upcoming = response.data.upcoming;
      console.log(
        `The latest mission was ${missionName}, flight number ${flightNumber}`
      );
      console.log(details);
      if (upcoming) {
        console.log(
          `This launch is yet to happen, launch date is ${launchDate} UTC`
        );
      } else if (launchSuccess) {
        console.log('This launch was a success!');
      } else {
        console.log('This launch may have gone wrong...');
      }
    });
}

function getRoadster() {
  axios.get('https://api.spacexdata.com/v3/roadster').then(function (response) {
    const name = response.data.name,
      details = response.data.details,
      earthDistance = response.data.earth_distance_km,
      marsDistance = response.data.mars_distance_km,
      speed = response.data.speed_kph,
      launchDate = response.data.launch_date_utc;

    console.log(
      `${name} is currently ${Math.floor(earthDistance)}km from earth!`
    );
    console.log(`Whizzing along at a whopping ${speed}Km/h`);
    console.log(details);
    console.log(`This payload was launched into space on ${launchDate} UTC`);
  });
}

let spaceXShips = {};
function getShips() {
  axios.get('https://api.spacexdata.com/v3/ships').then(function (response) {
    console.log(response.data);
    for (ship of response.data) {
      spaceXShips[ship.ship_name] = {
        shipId: ship.ship_id,
        homePort: ship.home_port,
        model: ship.ship_model,
        type: ship.ship_type,
        image: ship.image,
        yearBuilt: ship.year_built
      };
    }

    for (let shipName in spaceXShips) {
      console.log(shipName);
    }

    let userChoice = prompt('Enter a ship name');
    console.log(spaceXShips[userChoice]);
  });
}

function getHistoricalEvents() {
  axios.get('https://api.spacexdata.com/v3/history').then(function (response) {
    console.log(response.data.reverse());
    for (event of response.data) {
      console.log(event.title);
      console.log(event.event_date_utc);
      console.log(event.details);
      console.log('');
    }
  });
}

getHistoricalEvents();
