import * as React from "react";
// import interfaceDefs from './interfaceDefs';

type myProps = { id: string; title: any; children?:any}

export default function section(props:myProps) {
	// <> Load the props
	const sectionID = "section-" + props.id;
	const sectionTitle = props.title;

	// <> Render the section
	return (
		<div id={sectionID} className="section" >
			<h2>{sectionTitle} </h2>
			{/* {subtitles(data.subtitles)} */}
			<div className="">
				{props.children}
			</div>
		</div>
	)

}