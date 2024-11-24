import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Export from './pages/Export';
import Favorites from './pages/Favorites';
import Logo from './logo.svg'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/export" element={<Export />} />
          </Routes>
        </main>
        <footer>
          <p>Final project by Batuhan Gindeközü.</p>
          <a href="https://batu.tech.blog"><img src={Logo} style={{ width: '40px' }} alt="Batuhan Gindeközü Logo" /></a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;