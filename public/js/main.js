accordionList.forEach((item, itemIndex) => {
	item.addEventListener('click', () => {
		updateAccordion(item, itemIndex);
	});
});

(async function updateRepos() {
	const htmlList = document.querySelector('#repositories');
	const reposList = await getRepos();
	let reposString = reposList
		.map((repo) => {
			return `
		<li>
			<span class="repo__header">
				<i class="fa-brands fa-github"></i>
				<h4>${repo.name}</h4></span
			>
			<a class="repo__link" 
				target="_blank"
				href="${repo.link}">${repo.link}
			</a>
		</li>
		`;
		})
		.join('\n');

	htmlList.innerHTML = reposString;
})();
