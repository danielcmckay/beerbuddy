// App
const typePref = document.querySelectorAll(".beer-type");
const abvPref = document.getElementsByName("abv");
let card = document.querySelector(".card-form");
const submit = document
  .querySelector(".btn-submit")
  .addEventListener("click", getBeer);

typePref[0].addEventListener("change", getType);
typePref[1].addEventListener("change", getType);
typePref[2].addEventListener("change", getType);

let typeChoice = "";
let abvChoice = "";

function getType(e) {
  typeChoice = e.target.id;
  return typeChoice;
}

abvPref[0].addEventListener("change", getABV);
abvPref[1].addEventListener("change", getABV);
abvPref[2].addEventListener("change", getABV);

function getABV(e) {
  abvChoice = e.target.id;
  return abvChoice;
}

// API Request

const proxyurl = "https://cors-anywhere.herokuapp.com/";
let endpoint =
  "https://api.brewerydb.com/v2/beers/?key=def34c816c7aa962d9c92192486b300b";

class Beer {
  constructor() {}

  async getBeer() {
    const response = await fetch(proxyurl + endpoint);

    const responseData = await response.json();
    return responseData;

    console.log(responseData);
  }
}

const beer = new Beer();

function getBeer() {
  beer
    .getBeer()
    .then(results => {
      let beerList = results.data;
      let beerSuggestion = {};

      if (typeChoice === "" && abvChoice === "") {
        let errorMsg = document.createElement("h3");
        errorMsg = `Please make a selection <a class="btn" href="index.html">Back to Home</a>`;
        card.innerHTML = errorMsg;
      }
      let lowAbv = beerList.filter(beer => parseInt(beer.abv) < 5);
      let medAbv = beerList.filter(
        beer => parseInt(beer.abv) >= 5 && parseInt(beer.abv) < 8
      );
      let highAbv = beerList.filter(beer => parseInt(beer.abv) >= 8);

      // Ales
      let lowAbvAle = lowAbv.filter(beer => beer.name.includes("Ale"));
      let medAbvAle = medAbv.filter(beer => beer.name.includes("Ale"));
      let highAbvAle = highAbv.filter(beer => beer.name.includes("Ale"));
      // IPAs
      let lowAbvIPA = lowAbv.filter(beer => beer.name.includes("IPA"));
      let medAbvIPA = medAbv.filter(beer => beer.name.includes("IPA"));
      let highAbvIPA = highAbv.filter(beer => beer.name.includes("IPA"));
      // Pilsners
      let lowAbvPilsner = lowAbv.filter(beer => beer.name.includes("Pilsner"));
      let medAbvPilsner = medAbv.filter(beer => beer.name.includes("Pilsner"));
      let highAbvPilsner = highAbv.filter(beer =>
        beer.name.includes("Pilsner")
      );
      // Stouts
      // let lowAbvStout = lowAbv.filter(beer => beer.name.includes("Stout"));
      // let medAbvStout = medAbv.filter(beer => beer.name.includes("Stout"));
      // let highAbvStout = highAbv.filter(beer => beer.name.includes("Stout"));
      // // Lagers
      // let lowAbvLager = lowAbv.filter(beer => beer.name.includes("Lager"));
      // let medAbvLager = medAbv.filter(beer => beer.name.includes("Lager"));
      // let highAbvLager = highAbv.filter(beer => beer.name.includes("Lager"));

      // Ales
      if (typeChoice === "ale" && abvChoice === "low-abv") {
        beerSuggestion =
          lowAbvAle[Math.floor(Math.random() * lowAbvAle.length)];
      } else if (typeChoice === "ale" && abvChoice === "med-abv") {
        beerSuggestion =
          medAbvAle[Math.floor(Math.random() * medAbvAle.length)];
      } else if (typeChoice === "ale" && abvChoice === "high-abv") {
        beerSuggestion =
          highAbvAle[Math.floor(Math.random() * highAbvAle.length)];
      }

      // IPAs
      if (typeChoice === "ipa" && abvChoice === "low-abv") {
        beerSuggestion =
          lowAbvIPA[Math.floor(Math.random() * lowAbvIPA.length)];
      } else if (typeChoice === "ipa" && abvChoice === "med-abv") {
        beerSuggestion =
          medAbvIPA[Math.floor(Math.random() * medAbvIPA.length)];
      } else if (typeChoice === "ipa" && abvChoice === "high-abv") {
        beerSuggestion =
          highAbvIPA[Math.floor(Math.random() * highAbvIPA.length)];
      }

      // Pilsners
      if (typeChoice === "pilsner" && abvChoice === "low-abv") {
        beerSuggestion =
          lowAbvPilsner[Math.floor(Math.random() * lowAbvPilsner.length)];
      } else if (typeChoice === "pilsner" && abvChoice === "med-abv") {
        beerSuggestion =
          medAbvPilsner[Math.floor(Math.random() * medAbvPilsner.length)];
      } else if (typeChoice === "pilsner" && abvChoice === "high-abv") {
        beerSuggestion =
          highAbvPilsner[Math.floor(Math.random() * highAbvPilsner.length)];
      }

      // Stouts
      // if (typeChoice === "stout" && abvChoice === "low-abv") {
      //   beerSuggestion =
      //     lowAbvStout[Math.floor(Math.random() * lowAbvStout.length)];
      //   console.log(beerSuggestion);
      // } else if (typeChoice === "stout" && abvChoice === "med-abv") {
      //   beerSuggestion =
      //     medAbvStout[Math.floor(Math.random() * medAbvStout.length)];
      // } else if (typeChoice === "stout" && abvChoice === "high-abv") {
      //   beerSuggestion =
      //     highAbvStout[Math.floor(Math.random() * highAbvStout.length)];
      // }

      // // Lagers
      // if (typeChoice === "lager" && abvChoice === "low-abv") {
      //   beerSuggestion =
      //     lowAbvLager[Math.floor(Math.random() * lowAbvLager.length)];
      // } else if (typeChoice === "lager" && abvChoice === "med-abv") {
      //   beerSuggestion =
      //     medAbvLager[Math.floor(Math.random() * medAbvLager.length)];
      // } else if (typeChoice === "lager" && abvChoice === "high-abv") {
      //   beerSuggestion =
      //     highAbvLager[Math.floor(Math.random() * highAbvLager.length)];
      // }

      const resultBeer = document.createElement("div");
      resultBeer.className = "card";

      if (
        beerSuggestion === undefined ||
        beerSuggestion.length == 0 ||
        beerList === undefined
      ) {
        const errorResult = document.createElement("div");
        errorResult.className = "card";
        card.innerHTML = `
          <h2 class="h-2">Sorry, we couldn't find a beer with that combination. Please try again.</h2>
          <a class="btn" href="index.html">Back to Home</a>
      `;
      } else {
        card.innerHTML = `
          <h2 class="h-2">Check out this beer:</h2>
            <br/>
            <h3 class="beer-header">${beerSuggestion.name}</h3>
              <ul>
                <li>${beerSuggestion.abv}% ABV</li>
              </ul>
            <img src='img/individualbeer.png' style="float: right;"/>
              <p>${beerSuggestion.style.description}</p>
              <a class="btn" href="index.html">Try another combination!</a>`;
      }
    })

    .catch(err => {
      const errorResult = document.createElement("div");
      errorResult.className = "card";
      card.innerHTML = `
           <h2 class="h-2">Sorry, please try again.</h2>
           <a class="btn" href="index.html">Back to Home</a>`;
      console.log(err);
    });
}

// Results div
