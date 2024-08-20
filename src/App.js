import './App.css';
import Header from "./Header";
import InfoBlock from './components/InfoBlock';
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import { techStackData } from './data/techstack_data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='infoBlock'>
        I'm a software engineer with 3 years of experience.
        <br></br>
        Current projects <br />
        This website <br />
        <br></br>
        Off the Clock
        <br></br>
        List of interests here       
        <LinkHub />
        <TechStack tags={techStackData} imageStyle={{width: '50px'}} />
      </div>
      <Timeline />
      <InfoBlock />
      <InfoBlock />
      <footer>
        placeholder
      </footer>
    </div>
  );
}

export default App;
