import logo from './logo.svg';
import flag from './flag.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={flag} className="animate-bounce h-60 w-96 rounded-lg" alt="logo" />
        <p className='text-4xl font-bold'>
          Ceacheiii !!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
