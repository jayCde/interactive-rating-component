console.log("Hello World");

// var clickedRate =  document.getElementsByClassName("rate-btn").;
var clickedRate = document
  .getElementById("rate-val")
  .addEventListener(
    "click",
    console.log(document.getElementById("rate-val").value)
  );

// console.log("value", clickedRate.value);
