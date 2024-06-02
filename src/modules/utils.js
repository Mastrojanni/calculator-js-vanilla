const getElementChildrenByClassName = (elementClassName) => {

	const element = document.querySelector(elementClassName);

	if (!element) return element;

	return [...element.children];
};

const updateBufferElementContent = (bufferELement, elementToAppend) => {

	calculationBuffer = `${calculationBuffer}${elementToAppend}`;
	bufferELement.innerHTML = calculationBuffer;
};
