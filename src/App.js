import logo from './logo.svg';
import './App.css';
import StepProgress from './components/progress.js';

function App() {
  return (
    <div className="App">
      {/* register */}
      <div class="register-container">
        <h2>結帳</h2>
        <StepProgress />
      </div>
    </div>
  );
}

export default App;
