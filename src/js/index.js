//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SimpleCounter } from "./component/simplecounter.js";

//render your react application
let counter = 0;
setInterval(function() {
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	four = four.toString().slice(-1);
	three = three.toString().slice(-1);
	two = two.toString().slice(-1);
	one = one.toString().slice(-1);
	//console.log(four, three, two, one);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
