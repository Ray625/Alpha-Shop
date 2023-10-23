import 'style/progress.css'

function ProgressGroup({step, label,start = false, action = false, done = false}) {
  return (
    <span className="progress-group" data-phase="address">
      <span className={(start ? 'start ' : '') + (action ? 'action ' : '') + (done ? 'done ' : '') + 'progress-icon'} >
        <span className="text">{done ? '' : step}</span>
      </span>
      <span className="progress-label">{label}</span>
    </span> 
  )
}

export function Step1Progress() {
  return (
    <section className="progress-container">
      <ProgressGroup 
        step="1"
        label="寄送地址"
        start= {true}
      />
      <ProgressGroup 
        step="2"
        label="運送方式"
      />
      <ProgressGroup 
        step="3"
        label="付款資訊"
      />                         
    </section>
  )
}

export function Step2Progress() {
  return (
    <section className="progress-container step2">
      <ProgressGroup 
        step="1"
        label="寄送地址"
        done={true}
      />
      <ProgressGroup 
        step="2"
        label="運送方式"
        action={true}
      />
      <ProgressGroup 
        step="3"
        label="付款資訊"
      />                         
    </section>
  )
}

export function Step3Progress() {
  return (
    <section className="progress-container step2">
      <ProgressGroup 
        step="1"
        label="寄送地址"
        done={true}
      />
      <ProgressGroup 
        step="2"
        label="運送方式"
        done={true}
      />
      <ProgressGroup 
        step="3"
        label="付款資訊"
        action={true}
      />                         
    </section>
  )
}
