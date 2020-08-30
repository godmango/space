// document.getElementById("ll-rocketButton").onclick = function () {
//   flyRocket();
// };

// function flyRocket() {
//   //   document.getElementById("ll-rocketButton").style.paddingBottom = "100px";
//   //   document.getElementById("ll-rocketButton").style.transform = "rotate(315deg)";
//   document.getElementById("ll-rocketButton").style.animation = "fly-rocket 10s";
// }

const arrayData = [
  {
    key: "Mars",
    distance: 78340000,
    duration: "7 months",
  },
  {
    key: "Venus",
    distance: 41400000,
    duration: "4 months",
  },
  {
    key: "Mercury",
    distance: 91691000,
    duration: "40 days",
  },
  {
    key: "Jupiter",
    distance: 628730000,
    duration: "6 years",
  },
  {
    key: "Saturn",
    distance: 1275000000,
    duration: "3 years and 2 months",
  },
  {
    key: "Uranus",
    distance: 2723950000,
    duration: "8 years and a half",
  },
  {
    key: "Neptune",
    distance: 4351400000,
    duration: "12 years",
  },
];

// PRICING
const cost_per_1000km = 1000;

// function to get the number of passengers
function getNoOfPassenger() {

  const numberOfPassenger = document.getElementById("number").value;


  return numberOfPassenger;
}

function reply_click(clicked_id) {
  const planetName = clicked_id;

  if (planetName === "Earth") {
    alert("You are already on Earth!");
    return;
  }


  let cost = 0;


  const chosenPlanet = arrayData.find((item) => item.key === planetName);
  const distanceToChosenPlanet = chosenPlanet.distance;

  const noOfPassenger = getNoOfPassenger();

  cost = distanceToChosenPlanet * cost_per_1000km * noOfPassenger;

  // show total cost to the browser
  document.getElementById("hg-popup").style.display = "block";
  document.getElementById("hg-popup").innerHTML = `
    <div class="hg-popup-container">
        <div class="hg-popup-img" >
            
        <img src="https://i.pinimg.com/originals/56/a4/86/56a4868144d352eb4d7dc29b6fb79df7.gif" >
        </div>
        <div class="col-12 hg-popup-content text-center align-items-center">

            Distance: ${
              distanceToChosenPlanet.toLocaleString() +
              " KM " +
              "to " +
              planetName
            } <br>

            Total cost: ${cost.toLocaleString() + " USD"} <br>
            Expected travel time: ${chosenPlanet.duration.toLocaleString()}
        </div>
        <div>
        <a href="#ll-planet"><ion-icon name="arrow-up-circle-outline" size="large"></ion-icon></a>
        <a href="#ll-aboutUs"><ion-icon name="arrow-down-circle-outline" size="large"></ion-icon></a>
        </div>
    </div>
    `;

  smoothScroll(document.getElementById("hg-popup"));
}


window.smoothScroll = function (target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 0);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

