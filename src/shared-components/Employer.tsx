export default function Employer(props: { employer: any; }) {
	// <> Load the props
	const employer = props.employer;

	// <> Render the employer
	return (
		<div className="employer">
			<h3>{employer.name}</h3>
			<p>{employer.title}</p>
			<p>{employer.location}</p>
			<p>{employer.dates}</p>
			<p>{employer.description}</p>
		</div>
	);
}