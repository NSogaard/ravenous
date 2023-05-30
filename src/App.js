import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Business from './Components/Business';
import BusinessList from './Components/BusinessList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="ravenousHeader">Ravenous!</h1>
      {SearchBar()}
    </div>
  );
}

export default App;
