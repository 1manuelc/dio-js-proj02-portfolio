(async function main() {
	accordionList.forEach((item, itemIndex) => {
		item.addEventListener('click', () => {
			updateAccordion(item, itemIndex);
		});
	});

	const profile = await getProfile();
	updatePageInfos(profile);
})();
