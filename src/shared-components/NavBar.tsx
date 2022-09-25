import { Link } from 'react-router-dom';

const navLinks = [
	{ to: "/", text: "Home" },
	// { to: "../resume-blackandwhite-main/", text: "Black and White" }
	{ to: "/plain", text: "Plain" },
	{ to: "/blue", text: "Blue" },
	{ to: "/comp", text: "Componentized" }
]

export default function NavBar() {
	return (
		<div className="col-12 navbar bg-black	">
			{navLinks.map((eachLink) => {
				return (<Link to={eachLink.to} className="App-link">{eachLink.text}</Link>)
			})}
		</div>
	)
}
