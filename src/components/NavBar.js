import React from 'react';
// import './NavBar.css';

const links = [
    { title: 'Credits', link:'/Credits.html', id: 1}
];

// TODO: Style later so that the menu works properly on mobile
// https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
function Hamburger() {
    return(
        <div className='hamburger'></div>
    );
}

export default function NavBar() {
    const navBarItems = links.map(link =>
        <li key={link.id}>
            <a href={link.link}>
                {link.title}
            </a>
        </li>
    );

    return (
        <div className = 'navbar'>
            <ul>{navBarItems}</ul>
            <Hamburger />
        </div>
    );
}