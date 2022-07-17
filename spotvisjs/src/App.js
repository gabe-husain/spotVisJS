import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to the Spotify App, Click Below to get started
        </h1>
        <a
          className="Redirect Button"
          href="/login"
        >
          LogIn
        </a>
      </header>
    </div>
  );
}

export default App;
