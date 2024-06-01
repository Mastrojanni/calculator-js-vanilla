"use strict"

const OUTPUT_AREA_CLASSNAME = ".output-area";
const CTA_AREA_CLASSNAME = ".action-buttons-area";
const DATA_CTA_NUMBER_KEY = "ctatype";
const DATA_CTA_NUMBER_VALUE = "number";

let calculationBuffer = "";

const updateOutputArea = (actionValueChoose) => {

	calculationBuffer = `${calculationBuffer} ${actionValueChoose}`;

	const outputAreaChildren = [...(document.querySelector(OUTPUT_AREA_CLASSNAME)).children];

	outputAreaChildren[0].innerHTML = calculationBuffer;
};

const main = () => {

	const actionButtonsAreaElement = document.querySelector(CTA_AREA_CLASSNAME);
	const actionButtons = [...actionButtonsAreaElement.children];

	const numberButtons = actionButtons.filter(button => (
		button.dataset[DATA_CTA_NUMBER_KEY] == DATA_CTA_NUMBER_VALUE
	));

	// for each number button append its own number value to output buffer
	numberButtons.forEach(numberElement => (
		numberElement.onclick = () => updateOutputArea(numberElement.innerHTML)
	));
};

main();
