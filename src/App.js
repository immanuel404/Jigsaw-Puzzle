import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Puzzle1 from './components/puzzle1';
import Puzzle2 from './components/puzzle2';
import Puzzle3 from './components/puzzle3';
import Home from './components/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle1" element={<Puzzle1 />} />
          <Route path="/puzzle2" element={<Puzzle2 />} />
          <Route path="/puzzle3" element={<Puzzle3 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
