import './style/App.css';
import {Step1Progress, Step2Progress} from './components/progress.js';
import Step1Form from './components/stepform/step1Form.js';
import Step2Form from './components/stepform/step2Form.js';
import ProgressControl from './components/progress-control.js';

function Step1() {
  return (
    <div className="main-container">
      <div className="register-container">
        <h2 className='register-title'>結帳</h2>
        <Step1Progress />
        <Step1Form />
        <ProgressControl 
          step={1}/>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="main-container">
      <div className="register-container">
        <h2 className='register-title'>結帳</h2>
        <Step2Progress />
        <Step2Form />
        <ProgressControl 
          step={2}/>
      </div>
    </div>
  );
}

export default Step2;
