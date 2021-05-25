import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ProjectDetails from './components/Project/ProjectDetails';

library.add(faBars);

function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectDetails />
      </main>
    </>
  );
}

export default App;
