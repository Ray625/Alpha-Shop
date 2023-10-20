import '../style/progress.css'

function ProgressGroup({step, label, action = false}) {
  
  return (
    <span className="progress-group" data-phase="address">
      <span className={(action ? 'action' : '') + ' progress-icon'} >
        <span className="text">{step}</span>
      </span>
      <span className="progress-label">{label}</span>
    </span> 
  )
}

export default function StepProgress() {
  return (
    <section className="progress-container">
      <ProgressGroup 
        step="1"
        label="寄送地址"
        action= {true}
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