async function getRoadster() {
  let res = await axios.get('https://api.spacexdata.com/v3/roadster');
  let roadsterData = res.data;
  setRoadsterInfo(roadsterData);
}

function setRoadsterInfo(roadsterData) {
  let myRoadster = {
    name: roadsterData.name,
    details: roadsterData.details,
    earthDistance: Math.floor(roadsterData.earth_distance_km),
    marsDistance: Math.floor(roadsterData.mars_distance_km),
    speed: roadsterData.speed_kph,
    launchDate: roadsterData.launch_date_utc
  };
  document.getElementById('title').innerHTML = myRoadster.name;
  document.getElementById('description').innerHTML = myRoadster.details;
  document.getElementById(
    'distance-speed'
  ).innerHTML = `Elon's Roadster is currently ${myRoadster.earthDistance}km from earth,
   travelling a whopping ${myRoadster.speed}Km/h.`;
}

getRoadster();

// let myRoadster = getRoadster();
// console.log(myRoadster);

// const infoSection = document.querySelector('#info-section');
// let infoElement = document.createElement('p');
// for (i = 0; i <= 4; i++) {
//   infoElement.innerText();
//   infoSection.appendChild(infoElement);
// }
