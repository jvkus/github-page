import './assets/fonts.css'
import './App.css';
import NavBar from './components/NavBar';
import Header from "./Header";
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import { techStackData } from './data/techstack_data';


function App() {
  return (
    <div className="App">
      <div className='topBlock'>
        <NavBar />
        <div className='topBlockContent'>
          <Header />

          <div className='checkTheseOut'>
            <title>Check out</title>
            <div className='checkOut1'>
              my projects.
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
              my interests.
              <ul>
                <li>Birding</li>
                <li>Hydroponics</li>
                <li>Consumer research</li>
                <li>Painting</li>
                <li>Privacy and cyber security</li>
                <li>Skiing</li>
                <li>Visual effects</li>
                <li>Jazz accordion</li>
              </ul>
            </div>
            <div className='checkOut3'>
              my links.
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
          What's my story?
        </title>
        <Timeline />
      </div>
      
      <footer>
        placeholder
      </footer>
    </div>
  );
}

export default App;
