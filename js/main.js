accordionList.forEach((item, itemIndex) => {
	item.addEventListener('click', () => {
		updateAccordion(item, itemIndex);
	});
});
