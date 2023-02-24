import { employmentList } from "../../pages/ComponentizedResume/resumeData"

let job_key = 0;
let position_key = 0;

export default function EmploymentHistory(): JSX.Element { return (<div>
		{employmentList.map(eachEmployment => {
			return (<div className="employment" key={++job_key}>
				{eachEmployment.positions.map(eachPosition => {
					return (
						<div className="position" key={++position_key}>
							<h3 className="list-collapse">{eachEmployment.employer} | </h3>
							<h4>{eachPosition.positionTitle} ({eachPosition.timePeriod})</h4>
							{/* <h5> {eachPosition.timePeriod} </h5> */}
							<ul className="list-collapse">{eachPosition.accomplishments.map(eachAccomplishment => {
								return (<li>{eachAccomplishment} </li>)
							})}
							</ul>
						</div>)
				})
				}
			</div>)
		})}
		</div>
	) }