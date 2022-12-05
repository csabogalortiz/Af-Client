import './App.css';
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import { Container, Row, Col, Button } from 'react-bootstrap'




function App() {
  return (
    <Router>
      <div className="App pb-5">
        <Row>
          <Col> <Navigation /></Col>
          <Col> <AppRoutes /></Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;