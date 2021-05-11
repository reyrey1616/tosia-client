const getScores = (title, arrayOfScores, percentage) => {
	const score = arrayOfScores?.reduce(
		(accumulator, item) => accumulator + item?.points,
		0
	);
	const totalScore = score * percentage;

	return {
		title,
		score,
		percentage: (percentage * 100).toString() + "%",
		scoreFromPercentage: totalScore,
	};
};

const sum = (arr) => {
	const res = arr?.reduce((accumulator, item) => accumulator + item, 0);
	return res;
};

export const AcademicExcellenceData = (a, b, c, d, e) => {
	const honorsReceived = getScores("A. Academic Honors Received", a, 0.1);

	const citationReceived = getScores("B. Awards/Citations Received", b, 0.05);

	const academicContestWon = getScores("C. Academic Contests Won", c, 0.05);
	const nonAcademicContestWon = getScores(
		"D. Non-Academic Contests Won",
		d,
		0.05
	);
	const seminarsAttended = getScores(
		"E. Seminars/Trainings Attended",
		e,
		0.05
	);

	const totalScore = sum([
		honorsReceived?.scoreFromPercentage,
		citationReceived?.scoreFromPercentage,
		academicContestWon?.scoreFromPercentage,
		nonAcademicContestWon?.scoreFromPercentage,
		seminarsAttended?.scoreFromPercentage,
	]);

	return {
		totalScore,
		data: [
			honorsReceived,
			citationReceived,
			academicContestWon,
			nonAcademicContestWon,
			seminarsAttended,
		],
	};
};

export const LeadershipData = (a1, a2, b, c, d) => {
	const organizationInvolvement = getScores(
		"A.1. Organization Involvement",
		a1,
		0.06
	);

	const ngoInvolvement = getScores("A.2. Organization Involvement", a2, 0.06);

	const seminarsAttended = getScores(
		"B. Seminars/Trainings Attended",
		b,
		0.05
	);

	const citationsReceived = getScores(
		"C. Awards/Citations Received",
		c,
		0.05
	);
	const projectsOrganized = getScores(
		"D. Significant Projects Organized",
		d,
		0.13
	);

	const totalScore = sum([
		organizationInvolvement?.scoreFromPercentage,
		ngoInvolvement?.scoreFromPercentage,
		seminarsAttended?.scoreFromPercentage,
		citationsReceived?.scoreFromPercentage,
		projectsOrganized?.scoreFromPercentage,
	]);

	return {
		totalScore,
		data: [
			organizationInvolvement,
			ngoInvolvement,
			seminarsAttended,
			citationsReceived,
			projectsOrganized,
		],
	};
};

export const CommunityData = (b, c, d) => {
	const activitiesAttended = getScores("B. Activities Attended", b, 0.12);

	const citationsReceived = getScores("C. Awards/Citations Received", c, 0.1);
	const projectsOrganized = getScores(
		"D. Significant Projects Organized",
		d,
		0.13
	);

	const totalScore = sum([
		activitiesAttended?.scoreFromPercentage,
		citationsReceived?.scoreFromPercentage,
		projectsOrganized?.scoreFromPercentage,
	]);

	return {
		totalScore,
		data: [activitiesAttended, citationsReceived, projectsOrganized],
	};
};
