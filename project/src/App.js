import './App.css';
import Home from './Components/home/Home'
import Header from './Components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Joker from './Components/Jokers/Joker';

function App() {
  return (
    <div className="App">
      <Home/>
      <Joker/>
    </div>
  );
}

export default App;
