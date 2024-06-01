"use strict"

const CTA_AREA_CLASSNAME = ".action-buttons-area";
const DATA_CTA_NUMBER_KEY = "ctatype";
const DATA_CTA_NUMBER_VALUE = "number";

const main = () => {

	const actionButtonsAreaElement = document.querySelector(CTA_AREA_CLASSNAME);
	const actionButtons = [...actionButtonsAreaElement.children];

	const numberButtons = actionButtons.filter(button => (
		button.dataset[DATA_CTA_NUMBER_KEY] == DATA_CTA_NUMBER_VALU
	));
};

main();
