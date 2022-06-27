console.log("Hello World");
// console.log("value", clickedRate.value);

// -------> using and onclick event

//assign rating values to variable
// let rating_vals = `
//             <button class="rate-btn" id="rate-val" value="1" type="button" onclick="localStorage.setItem('selected_rate', value)">1</button>
//             <button class="rate-btn" id="rate-val" value="2" type="button" onclick="localStorage.setItem('selected_rate', value)">2</button>
//             <button class="rate-btn" id="rate-val" value="3" type="button" onclick="localStorage.setItem('selected_rate', value)">3</button>
//             <button class="rate-btn" id="rate-val" value="4" type="button" onclick="localStorage.setItem('selected_rate', value)">4</button>
//             <button class="rate-btn" id="rate-val" value="5" type="button" onclick="localStorage.setItem('selected_rate', value)">5</button>
// `;

// //append button elements to parent div
// document.getElementById("rating-values").innerHTML = rating_vals;

//------->using an event listener

// declare selected variables
var user_selected_rate, rating_vals_container;

// //variable assignment
// rating_vals_container = document.getElementById("rating-values");

// //define data for
// const ratingVals = [
//   { id: "1", value: 1 },
//   { id: "2", value: 2 },
//   { id: "3", value: 3 },
//   { id: "4", value: 4 },
//   { id: "5", value: 5 },
// ];

// //map buttons
// const mapRatingValues = ratingVals
//   .map((val) => {
//     return `
//         <button key=${val.id} class="rate-btn" id=${val.id} value=${val.value} type="button" >${val.value}</button>
//     `;
//   })
//   .join("");

// //render button elements to container element
// rating_vals_container.innerHTML = mapRatingValues;

// //add event listener
// rating_vals_container.addEventListener("click", function (event) {
//     const clickedaButton= event.target.nodeName === 'BUTTON';
//     if(!clickedaButton){
//         return;
//     }
//   user_selected_rate = event.target.value;
//   console.log(user_selected_rate);
//   localStorage.setItem("selected_rate", event.target.value);
// });
