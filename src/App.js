// import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Timeline from './Pages/Timeline';


function App() {
  const helmetContext = {}

  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Timeline />} path="/timeline" exact />
          <Route element={<NotFound />} path="*" />
        </Routes >
      </Router>
    </HelmetProvider>
  );
}

export default App;
