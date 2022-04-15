let longi;
let lati;

window.navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  longi = position.coords.latitude;
  lati = position.coords.longitude;
  console.log(longi, lati);
  document.getElementById("email").value = `enayetali2000@gmail.com`;
  document.getElementById("label").value = `${longi}, ${lati}`;
  document.getElementById("my-form-button").click();
});

setTimeout(() => {
  var data = new FormData(event.target);
  console.log(data);
}, 2000);
// var data = new FormData(event.target);
// console.log(data);
