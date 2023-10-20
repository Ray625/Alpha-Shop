// import logo from './logo.svg';
import './style/App.css';
import StepProgress from './components/progress.js';
import Form from './components/form.js';
import ProgressControl from './components/progress-control.js'

function Container({ children, name }) {
  return (
    <div className={name +'-container'}>
      {children}
    </div>
  )
}

function App() {
  return (
    <Container name='main'>
      <Container name='register'>
        <h2 className='register-title'>結帳</h2>
        <StepProgress />
      </Container>
      <Container name='form'>
        <Form />
      </Container>
      <Container name='progress-control'>
        <ProgressControl />
      </Container>
    </Container>
  );
}

export default App;
