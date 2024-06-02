"use strict"

const OUTPUT_AREA_CLASSNAME = ".output-area";
const CTA_AREA_CLASSNAME = ".action-buttons-area";
const DATA_CTA_NUMBER_KEY = "ctatype";
const DATA_CTA_NUMBER_VALUE = "number";

const CALCULATION_BUTTONS_MAP = {
	clearErase: "CE",
	clear: "C",
	eraseLast: "<x",
	percentage: "%",
	seven: "7",
	eight: "8",
	nine: "9",
	multiply: "X",
	four: "4",
	five: "5",
	six: "6",
	minus: "-",
	one: "1",
	two: "2",
	three: "3",
	plus: "+",
	invertSign: "+-",
	zero: "0",
	dot: ".",
	equal: "="
};

const CALCULATION_BUTTONS_VALUES = Object.keys(CALCULATION_BUTTONS_MAP).map(key => CALCULATION_BUTTONS_MAP[key]);

let calculationBuffer = "";

const updateOutputArea = (choosenAction) => {

	const outputAreaChildren = getElementChildrenByClassName(OUTPUT_AREA_CLASSNAME);

	if (choosenAction === CALCULATION_BUTTONS_MAP.equal) {

		updateBufferElementContent(outputAreaChildren[0], CALCULATION_BUTTONS_MAP.equal);

		const result = eval(calculationBuffer);

		outputAreaChildren[1].innerHTML = result;

		return;
	}

	if (calculationBuffer === CALCULATION_BUTTONS_MAP.zero) {
		calculationBuffer = "";
	}

	updateBufferElementContent(outputAreaChildren[0], choosenAction);
};

const main = () => {

	const actionButtons = getElementChildrenByClassName(CTA_AREA_CLASSNAME);

	updateOutputArea("0");

	actionButtons.forEach(calcButtons => (
		calcButtons.onclick = () => updateOutputArea(calcButtons.innerHTML)
	));
};

main();
