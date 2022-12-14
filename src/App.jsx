import './App.css';
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import { Row, Col } from 'react-bootstrap'



function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>

        <AppRoutes />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;