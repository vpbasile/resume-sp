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
		id: "005", employer: "Evergreen Healthcare Partners", positions: [{
			positionTitle: "Grand Central and Eligibility Consultant", timePeriod: "since September 2022", 
			accomplishments: [
				`Built and led the transition to Hospital Logictics from EVS and Transport at two hopsitals along with dispatch for three non-patient service departments.`,
				`Guided clinical operations through implementation of Epic's Discharge Milestones and Delays tool.`,
				`Worked with financial clearance office to streamline worflows and fix RTE issues.`
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
			{
				positionTitle: "Technical Solutions Engineer", timePeriod: "6.5 years", accomplishments: [`Built and sustained strong, long-term relationships, meeting with operational leadership, recommending best practices, and taking responsibility for customer success.`, `Utilized technical knowledge to troubleshoot and resolve technical issues in Epic applications for insurance eligibility verification, patient account assignment, and bed logistics.`, `Developed and taught classes for a little-understood functionality, including comprehensive documentation suited to engineers, clients, and executives.`, `Identified key issues leading to revenue loss and user dissatisfaction at Bryan Health. Guided client analysts through implementing preventative measures.`, `Met and exceeded Providence Health's needs through coding on-demand tools to translate
				data imports from third-party systems.`]
			},
			{ positionTitle: "Technical Coordinator", timePeriod: "3 years", accomplishments: [`Managed team of applications strategy and technical solutions staff to drive business continuity and system responsiveness. Facilitated strong inter-organizational communication, delegated workload, and gave regular personnel evaluations.`, `Built and sustained strong relationships with clinical, technical, and executive leadership to drive strong communication and critical decision making.`, `Successfully coordinated software upgrades and monthly install of custom code packages including on-site and remote support, troubleshooting of issues and concerns, and guidance on team bandwidth to build and maintain functionality.`, `Drove reporting to senior leadership on staff performance and customer service to streamline operations and keep communications fluid and relevant.`, `Worked directly with clinical leadership to evaluate enhancements based on needs and priorities`] },
		]
	},
];

export type degree = { degree: string, institution: string }
export const educationHistoryContent: degree[] = [
	{ degree: "Master of Fine Arts in Theatre Design (Lighting and Sound)", institution: "The University of Memphis" },
	{ degree: "Bachelor of Arts in Music Theory", institution: "Youngstown State University" }
]