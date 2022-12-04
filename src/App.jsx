// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Navigation from './components/Navigation/Navigation'


// const App = () => {
//   return (
//     <div className="App pb-5">

//       <Navigation />

//       <h1> Hola Soy Home</h1>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

      </div>
    </Router>
  );
}

export default App;