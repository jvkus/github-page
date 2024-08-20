import React, { useState } from 'react';
import './NavBar.css';

const links = [
    { title: 'Home', link:'/', id: 0},
    { title: 'Credits', link:'/Credits.html', id: 1}
];

// TODO: Fix styling so that the menu works properly
// https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
function Hamburger({ isOpen }) {
    return(
        <>
            <div className='hamburger'>
                <div className='burger1'/>
                <div className='burger2'/>
                <div className='burger3'/>
            </div>
            <style jsx='true'>{`
                .burger1 {
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2 {
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)' };
                    opacity: ${ isOpen ? 0 : 1 };
                }
                .burger3 {
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)' };
                }
            `}</style>
        </>
    );
}

export default function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

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
                <Hamburger onClick={toggleHamburger} />
            </div>
            <style jsx='true'>{`
                .navBar ul {
                    display: ${ hamburgerOpen ? 'inline' : 'none'};
                }
            `}</style>
        </div>
    );
}