"use strict"

const BUTTONS_BASE_CLASSNAME = "b-";

let expression = [];

const calculatorMap = {
	
}

const generateButtonClassName = (number) => {
	return `${BUTTONS_BASE_CLASSNAME}${number}`;
};

const generateButtonsClickHanlders = () => {};

const initButtonsHandlers = () => {

	const buttons = [
		generateButtonClassName(0),
		generateButtonClassName(1),
		generateButtonClassName(2),
		generateButtonClassName(3),
		generateButtonClassName(4),
		generateButtonClassName(5),
		generateButtonClassName(6),
		generateButtonClassName(7),
		generateButtonClassName(8),
		generateButtonClassName(9),
	];
};

const main = () => {

	initButtonsHandlers();
	const id = generateButtonClassName(1);
	const element = document.getElementById(id);
	// element.onclick = () => {console.log("click 1")};
};

main();
