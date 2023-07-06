import './App.scss';
import Intro from './comp/Intro';
import Projects from './comp/Projects';
import Skills from './comp/Skills';

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
