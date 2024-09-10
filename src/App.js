import './assets/fonts.css'
import './App.css';
import NavBar from './components/NavBar';
import Header from "./Header";
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack';
import  Timeline from './components/Timeline';
import { techStackData } from './data/techstack_data';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='credits' element={<Credits />} />
                <Route path='hackermode' element={<HackerMode />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </div>
    );
}

function Home () {
    return (
        <div className='Home'>
            <div className='topBlock'>
                <NavBar />
                <div className='topBlockContent'>
                <Header />

                <div className='checkTheseOut'>
                    <title>Check out</title>
                    <div className='checkOut1'>
                    <title>my projects.</title>
                    <ul>
                        <li>
                        <a href='https://github.com/jvkus/jvkus.github.io'>
                            This website
                        </a>
                        </li>
                        <li>
                        More to come
                        </li>
                    </ul>
                    </div>
                    <div className='checkOut2'>
                    <title>my interests.</title>
                    <ul>
                        <li>Birding</li>
                        <li>Hydroponics</li>
                        <li>Consumer research</li>
                        <li>Painting</li>
                        <li>Privacy and security</li>
                        <li>Skiing</li>
                        <li>Visual effects</li>
                        <li>Jazz accordion</li>
                    </ul>
                    </div>
                    <div className='checkOut3'>
                    <title>my links.</title>
                    <LinkHub />
                    </div>
                </div>

                <div className='techStackBlock'>
                    <title>Tech Stack</title>
                    <TechStack tags={techStackData} imageStyle={{width: '50px'}} />
                </div>
                </div>
            </div>

            <div className='middleBlock'>
                <title>
                    <div>
                        What's my story?
                    </div>
                </title>
                <Timeline />
            </div>
            
            <footer>
                <p>
                Created by Joanna Kus, 2024.
                </p>
            </footer>
        </div>
    );
}

function Credits() {
    return (
        <div>
            <div className='topBlock'>
                <NavBar />
                <div className='topBlockContent'>
                    <ul>
                        <li>
                            <a href="https://www.flaticon.com/free-icons/bird" title="bird icons">
                                Goose Favicon created by Freepik - Flaticon
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.flaticon.com/free-icons/application"
                                title="application icons"
                            >
                                Resume application icon created by Mayor Icons - Flaticon
                            </a>
                        </li>
                        <li>
                            <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">
                                Blog icon created by mpanicon - Flaticon
                            </a>
                        </li>
                        <li>
                            Website background by&nbsp;
                            <a href="https://unsplash.com/@sortino?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                                Joshua Sortino
                            </a>
                            &nbsp;on&nbsp;
                            <a href="https://unsplash.com/photos/aerial-view-of-mountains-gii7lF4y0WY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                                Unsplash
                            </a>
                        </li>
                        <li>
                            Timeline code created with much reference to&nbsp;
                            <a href="https://www.florin-pop.com/timeline">
                                Florin Pop
                            </a>
                            .&nbsp; 
                            <a href="https://archive.is/fGJvo">
                                View archived page
                            </a>
                        </li>
                        <li>
                            Mobile timeline code created with reference to&nbsp;
                            <a href="https://codepen.io/j471n/pen/vYJaLvm">
                                Jatin Sharma
                            </a>
                            .
                        </li>
                    </ul>
                </div>
            </div>
            <footer>
                <p>
                    Created by Joanna Kus, 2024.
                </p>
            </footer>
        </div>
    );
}

function HackerMode() {
    return (
        <div className='hackMode'>
            <div className='topBlock'>
                <NavBar />
                <div className='topBlockContent'>
                    This feature is under construction. Check back soon!
                </div>
            </div>
            <footer>
                <p>
                    Created by Joanna Kus, 2024.
                </p>
            </footer>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to='/'>Go to the home page</Link>
            </p>
        </div>
    )
}

export default App;
