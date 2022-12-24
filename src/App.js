// import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router} from 'react-router-dom'
import Nav from './Components/Nav';
import PageRoute from './PageRoute';


function App() {
  const helmetContext = {}

  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Nav />
        <PageRoute/>
      </Router>
    </HelmetProvider>
  );
}

export default App;
