import './App.css';
import Header from "./Header";
import InfoBlock from './components/InfoBlock.js';
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack.js';
import Timeline from './components/Timeline.js';
import { techStackData } from './data/techstack_data.js';

import { ReactComponent as AWSLogo } from './assets/aws-logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AWSLogo />
        I'm a software engineer with 3 years of experience.
        <br />
        Tech Stack
        PHP
        React.js
        Python
        Java
        <br />
        Current projects
        This website
        <br />
        Off the Clock

        List of interests here       
      </div>
      <TechStack data={techStackData} />
      <Timeline />
      <InfoBlock />
      <InfoBlock />
      <LinkHub />
      <footer>
        placeholder
      </footer>
    </div>
  );
}

export default App;
