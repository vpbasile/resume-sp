interface positionData {
	positionTitle: string,
	timePeriod: string,
	accomplishments: string[]
}

export type employmentData = {
	id: string,
	employer: string,
	positions: positionData[]
}