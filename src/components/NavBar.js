import './NavBar.css';

const links = [
    { title: 'Home', link:'/', id: 0 },
    { title: 'Credits', link:'/Credits.html', id: 1 },
    { title: 'Hackerman', link: '/Credits.html', id: 2 }
];

// TODO: Fix styling so that the menu works properly

export default function NavBar() {
    const navBarItems = links.map(link =>
        <li key={link.id}>
            <a href={link.link}>
                {link.title}
            </a>
        </li>
    );

    return (
           <div>
            <div className='navBar'>
                <ul>{navBarItems}</ul>
            </div>
        </div>
    );
}