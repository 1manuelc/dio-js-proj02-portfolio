class Repository {
	name;
	link;
	updateDate;

	constructor(n, lnk, upd) {
		this.name = n;
		this.link = lnk;
		this.updateDate = upd;
	}
}

async function getRepos() {
	const bruteData = await fetch('https://api.github.com/users/1manuelc/repos');
	const reposData = await bruteData.json();
	return reposArray = reposData.map((repo) => {
		return new Repository(repo.name, repo.html_url, repo.updated_at);
	});
}
