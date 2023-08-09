// Imports
import {employmentData} from "../../shared-components/concept_job/ts_defs";

export const personData = { name: "Vincent Basile", email: "vpbphone@gmail.com", phone: "724.984.4390", headline: `Proven Leadership, Complex Problem-solving, Client-Focused Relationship Building` };
export const summary = `Analytical, innovative, and motivated Technical Consultant with 7 years experience supporting Epic organizations and twice that time spent as a creative collaborator in fast-paced and challenging environments. Diverse analytical and problem-solving skills, including experience in software development, data analysis, user experience support, and report design. Extensive experience optimizing workflow efficiencies and reducing costs. Strong client-focused relationship-building skills and a passion for knowledge sharing via well-written documentation.`;

// <> Define the data structures for the resume
type sectionName = "header" | "sidebar" | "main" | "footer"
export type sectionContents = {
	id: string,
	section: sectionName,
	title: string,
	content: string[]
}


type list = string[]

export const listOrgs: list = [
	"UC Davis Health",
	"Kaiser Permanente",
	`Lucile Packard Children's Hospital`,
	`Stanford Healthcare`,
	`Beaumont Health`,
	`Enloe Medical Center`,
	`Bryan Health`,
	`Providence Health`,
	`University of Utah Health`,
	`Conemaugh Health`,
	`The Christ Hospital`]

export const listExpertise: list = [
	"Hospital Logistics",
	"Bed Planning, Capacity Management",
	"Discharge Milestones/Delays",
	"Transfer Center",
	"Benefit Filing",
	"Plan Mapping",
	"MyChart Estimate Queries",
	"Prelude-Resolute Integration",
	"Label Design",
	"Printing",
	"Technical Troubleshooting",
	"Technical Training & Mentoring",
	"Upgrades, Installs",
	"Data Imports",
	"Reporting WB, Dashboards",
	"Clarity, SQL"
]

export const listCerts: list = ["Prelude", "Eligibility", "Grand Central", "MyChart", "ADT Clarity Data Model"]

export const employmentList: employmentData[] = [
	{
		id: "005", employer: "Stanford Healthcare", positions: [{
			positionTitle: "Grand Central and Eligibility Consultant", timePeriod: "September 2022 - June 2023", 
			accomplishments: [
				`Led the analysis, build, and user validation of Stanford's transition to the Hospital Logictics module from EVS and Transport at two hospitals along with dispatch for three non-patient service departments.`,
				`Troubleshooting, issue resolution, and end-user support over the phone and on-site.`,
				`Guided clinical operations through implementation of Epic's Discharge Milestones and Delays tool.`,
				`Worked with financial clearance office to streamline workflows and fix RTE issues.`
			]
		}]
	},
	{
		id: "004", employer: "Olive AI", positions: [{
			positionTitle: "Technical Project Manager", timePeriod: "February-September 2022", accomplishments: [
				`Initiated a culture of documentation by creating the team's first Confluence wiki.`,
				`Organized collaborative development of new functionality with customers.`,
				`Led customers' IT and operational stakeholders through the implementation of our product.`,
				`Represented the customers' needs to our engineering team.`,
				`Created customer-facing presentation materials and scripts for each phase of the implementation process.`
			]
		}]
	},
	{
		id: "003", employer: "Epic Systems", positions: [
			{ positionTitle: "Technical Coordinator", timePeriod: "3 years", accomplishments: [`Managed a cross-functional team of technical solutions staff to drive customer success maintain system health, delegating workload and giving regular personnel evaluations.`, `Built and sustained strong relationships with clinical, technical, and executive stakeholders to drive workflow design and process improvement.`, `Successfully coordinated three years of software upgrades and monthly installs of custom code packages including on-site and remote support, troubleshooting of issues and concerns, and guidance on team bandwidth to build and maintain functionality.`, `Drove reporting to senior leadership on staff performance and customer service to streamline operations and keep communications fluid and relevant.`, `Worked directly with clinical leadership to evaluate enhancements based on needs and priorities`] },
			{ positionTitle: "Technical Solutions Engineer", timePeriod: "6.5 years", accomplishments: [`Utilized technical knowledge to troubleshoot and resolve technical issues in Grand Central, Prelude, Real-Time Eligibility, and reporting and analytics for those applications.`,`Built and sustained strong, long-term relationships with Epic clients through ongoing support, recommending best practices, meeting with operational leadership, and taking responsibility for customer success.`, `Supported numerous go-lives as a Bed Planning specialist`, `Advised Community Connect rollouts.`, `Trained classes for a little-understood functionality and developed comprehensive documentation suited to engineers, clients, and executives.`, `Identified key issues leading to revenue loss and user dissatisfaction at Bryan Health. Guided client analysts through implementing preventative measures.`, `Met and exceeded Providence Health's needs through coding on-demand tools to translate data imports from third-party systems.`]
		},
		]
	},
];

export type degree = { degree: string, institution: string }
export const educationHistoryContent: degree[] = [
	{ degree: "Master of Fine Arts in Theatre Design (Lighting and Sound)", institution: "The University of Memphis" },
	{ degree: "Bachelor of Arts in Music Theory", institution: "Youngstown State University" }
]