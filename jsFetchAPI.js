console.log("Fetch API");

function loadRandomUserPromise() {
  fetch("https://reqres.in/api/users", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//loadRandomUserPromise();

async function loadRandomUserAsyncAwait() {
  let response = await fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//loadRandomUserAsyncAwait();

async function randomCatAPIAsyncAwait() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let data = await response.json();
  console.log("data", data);
  const imageUrl = data[0].url;
  console.log("imageUrl", imageUrl);
  let element = document.querySelector(".catImage");
  element.src = imageUrl;
}

//randomCatAPIAsyncAwait();

//COIN API

async function loadExchangeRate() {
  let response = await fetch(
    "https://rest.coinapi.io/v1/exchangerate/BTC/USD",
    {
      method: "GET",
      headers: {
        "X-CoinAPI-Key": "4e31c2e2-0465-47be-ada7-aa851d679991",
      },
    }
  );
  let data = await response.json();
  console.log("data", data);
}

loadExchangeRate();
