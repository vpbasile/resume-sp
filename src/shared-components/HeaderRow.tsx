

export default function header(props: any) {
	const personData = props.personData;
	return <div id="headerRow" className="row">
		<div className="col">
			<h1>{personData.name}</h1>
		</div>
		<div className="col-5 align-right">
			<h2 className="remove-borders">{personData.email}</h2>
			<h2 className="remove-borders">{personData.phone}</h2>
		</div>
		<div id="headline-div" className="col-12 text-center">
			<h2 id="headline">{personData.headline}</h2>
		</div>
	</div>;
}