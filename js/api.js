async function getProfile() {
	const fetching = await fetch('./data/profile.json');
	const fetched = await fetching.json();
	return fetched;
}

function updateHeader(profile) {
	const header = document.querySelector('header');
	header.innerHTML = `
		<img
			src="${profile.photo}"
			alt="${profile.name} GitHub profile photo"
		/>
	`;

	header.innerHTML += `
		<div class="header__infos">
			<h1>Olá, me chamo ${profile.name}</h1>

			<ul class="infos__list">
				<li class="infos__item">
					<i class="fa-solid fa-user"></i>
					<h2>${profile.job}</h2>
				</li>
				<li class="infos__item">
					<i class="fa-solid fa-location-dot"></i>
					<h2>${profile.location}</h2>
				</li>
				<li class="infos__item">
					<i class="fa-solid fa-envelope"></i>
					<h2>${profile.email}</h2>
				</li>
			</ul>
		</div>
	`;

	const socialLinksList = profile.links;
	console.log(socialLinksList);
	header.innerHTML +=
		'<div class="header__links">' +
		socialLinksList
			.map((link) => {
				return `
				<a href="${link.url}" target="_blank">
					<i class="${link.fa_icon}"></i>
				</a>
			`;
			})
			.join('\n') +
		'\n</div>';
}

function updateHardSkills(hardSkillsList) {
	const htmlList = document.querySelector('#skills__hard');
	htmlList.innerHTML = hardSkillsList
		.map((s) => `<li><i class="${s.fa_icon}"></i></li>`)
		.join('\n');
}

function updateSoftSkills(softSkillsList) {
	const htmlList = document.querySelector('#skills__soft');
	htmlList.innerHTML = softSkillsList.map((s) => `<li>${s}</li>`).join('\n');
}

function updateLanguages(langList) {
	const htmlList = document.querySelector('#languages');
	htmlList.innerHTML = langList.map((l) => `<li>${l}</li>`).join('\n');
}

function updatePortfolio(projectsList) {
	const htmlList = document.querySelector('#repositories');

	htmlList.innerHTML = projectsList
		.map((proj) => {
			if (proj.target === 'GitHub') {
				return `
				<li>
					<span class="repo__header">
						<i class="fa-brands fa-github"></i>
						<h4>${proj.name}</h4>
					</span>
					<a href="${proj.url}" target="_blank" class="repo__link">${proj.url}</a>
				</li>
			`;
			} else if (proj.target === 'Instagram') {
				return `
				<li>
					<span class="repo__header">
						<i class="fa-brands fa-instagram"></i>
						<h4>${proj.name}</h4>
					</span>
					<a href="${proj.url}" target="_blank" class="repo__link">${proj.url}</a>
				</li>
			`;
			}
		})
		.join('\n');
}

function updateEducation(educationList) {
	const htmlList = document.querySelector('#education');

	htmlList.innerHTML = educationList
		.map((item) => {
			return `
		<li>
			<span
				><i class="fa-solid fa-book"></i>
				${item.name} - 
				<abbr
					title="${item.abbreviation_for}"
					>${item.institution}</abbr
				>
				 (${item.period})
			</span>
		</li>
		`;
		})
		.join('\n');
}

function updateJobs(jobsList) {
	const htmlList = document.querySelector('#jobs');

	htmlList.innerHTML = jobsList
		.map((job) => {
			return `
		<li>
			<span
				><i class="fa-solid fa-briefcase"></i>
				${job.name} (${job.period})
			</span>
		</li>
		`;
		})
		.join('\n');
}

function updatePageInfos(profile) {
	updateHeader(profile);
	updateHardSkills(profile.skills.hardSkills);
	updateSoftSkills(profile.skills.softSkills);
	updateLanguages(profile.languages);
	updatePortfolio(profile.portfolio);
	updateEducation(profile.education);
	updateJobs(profile.professionalExperience);
}
