import './assets/fonts.css'
import './App.css';
import Header from "./Header";
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import { techStackData } from './data/techstack_data';


function App() {
  return (
    <div className="App">
      <div className='topBlock'>
        <Header />

        <div className='checkTheseOut'>
          <title>Check out</title>
          <div className='checkOut1'>
            my projects
            <ul>
              <li>coming soon</li>
            </ul>
          </div>
          <div className='checkOut2'>
            my interests
            <ul>
              <li>coming soon</li>
            </ul>
          </div>
          <div className='checkOut3'>
            my links
            <LinkHub />
          </div>
        </div>

        <div className='techStackBlock'>
          <title>Tech Stack</title>
          <TechStack tags={techStackData} imageStyle={{width: '50px'}} />
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
