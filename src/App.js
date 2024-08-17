import './App.css';
import Header from "./Header";
import InfoBlock from './components/InfoBlock.js';
import LinkHub from './components/LinkHub';
import TechStack from './components/TechStack.js';
import Timeline from './components/Timeline.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        I'm a software engineer with 3 years of experience.

        Contacts here. List email but hide it so robots can't scrape it.

        Put timeline here of past experience.

        Now - Icons
          - Building new things
          - Contributing to what open source projects?

        3 years at RetailMeNot - Icons of programming languages used
          - Some bullets about what I did

        Graduated from Elmhurst University
          - University projects. links. screenshots?

        iD Tech experience 3 - Programming languages
          - bullets

        iD Tech experience 2
          - bullets

        iD Tech experience 1
          - bullets 

        Tech Stack
        PHP
        React.js
        Python
        Java

        Current projects
        This website

        Off the Clock

        List of interests here

        
      </div>
      <TechStack />
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
