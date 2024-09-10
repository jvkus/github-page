import './NavBar.css';
import { Link } from 'react-router-dom';

const links = [
	{ title: 'Home', link: '/', id: 0 },
	{ title: 'Credits', link: '/credits', id: 1 },
	{ title: 'Hacker Mode', link: '/hackermode', id: 2 },
];

export default function NavBar() {
	const navBarItems = links.map((link) => (
		<li key={link.id}>
			<Link to={link.link}>{link.title}</Link>
		</li>
	));

	return (
		<div>
			<div className="navBar">
				<ul>{navBarItems}</ul>
			</div>
		</div>
	);
}
