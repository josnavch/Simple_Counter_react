import React from "react";
import PropTypes from "prop-types";

//import "./icons.js";

//create your first component
export function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.string,
	digitThree: PropTypes.string,
	digitTwo: PropTypes.string,
	digitOne: PropTypes.string
};
