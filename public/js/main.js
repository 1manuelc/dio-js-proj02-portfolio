const animationTimeInMs = 300;
const accordionList = document.querySelectorAll('.accordion__item');

function disableItem(item, content) {
	item.classList.remove('active');
	content.style.maxHeight = '0';
	setTimeout(() => {
		content.style.display = 'none';
	}, animationTimeInMs);
}

function enableItem(item, content) {
	item.classList.add('active');
	content.style.display = 'flex';
	content.style.maxHeight = content.scrollHeight + 'px';
}

function disableOtherItems(actualItemIndex) {
	accordionList.forEach((item, index) => {
		if (index != actualItemIndex) {
			const content = item.querySelector('.accordion__content');
			disableItem(item, content);
		}
	});
}

function updateAccordion(item, itemIndex) {
	const isActive = item.classList.contains('active');
	const content = item.querySelector('.accordion__content');

	isActive ? disableItem(item, content) : enableItem(item, content);
	disableOtherItems(itemIndex);
}

accordionList.forEach((item, itemIndex) => {
	item.addEventListener('click', () => {
		updateAccordion(item, itemIndex);
	});
});
