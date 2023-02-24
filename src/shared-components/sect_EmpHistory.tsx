import { employmentData } from "../pages/ComponentizedResume/concept_job/ts_defs"
import { employmentList } from "../pages/ComponentizedResume/resumeData"

type myProps = { employmentData: employmentData[] }
export default function EmploymentHistory(props: myProps): JSX.Element { return (<div>
		{employmentList.map(eachEmployment => {
			return (<div className="employment">
				{eachEmployment.positions.map(eachPosition => {
					return (
						<div className="position" >
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