// import "./bootstrap-grid.css";
import "../../shared-css/bootstrap.min.css"
import EmploymentHistory from "../../shared-components/sect_EmpHistory";
import HeaderRow from "../../shared-components/HeaderRow";
import Section from "../../shared-components/Section";
import "./resume.css"
import { degree, educationHistoryContent, personData, employmentList, listOrgs, listExpertise, listCerts } from "./resumeData";
// import "./resumeData.ts";
// import './interfaceDefs';

export default function Componentized() {

	function parseList(list: string[]) { return (<ul>{list.map((item) => { return (<li>{item}</li>) })}</ul>) }

	function educationHistory(educationContent: degree[]): JSX.Element[] {
		return educationContent.map((degree) => {
			return (<div id="educationDetail" className="row">
				<div className="col">
					<span>{degree.degree} | </span>
					<span>{degree.institution}</span>
				</div>
			</div>)
		})
	}

	// <> Render the function
	return (
		<div id="resume-whole" className="resume container">
			<HeaderRow personData={personData} />
			<div id="middleRow" className="row">
				<div id='resume-sidebar' className='col-3'>
					<Section id="orgs" title="Epic Organizations">{parseList(listOrgs)}</Section>
					<Section id="listExpertise" title="Epic Expertise">{parseList(listExpertise)}</Section>
					<Section id="listCerts" title="Certifications">{parseList(listCerts)}</Section>
				</div>
				<div id='resume-main' className='col-9'>
					<EmploymentHistory employmentData={employmentList} />
				</div>
			</div>
			<div id="footerRow" className="row">
				{educationHistory(educationHistoryContent)}
			</div>
		</div >
	)
}