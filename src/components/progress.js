

function ProgressGroup({step, label}) {
  return (
    <span className="progress-group" data-phase="address">
      <span className="progress-icon">
        <span className="text">{step}</span>
      </span>
      <span className="progress-label">{label}</span>
    </span> 
  )
}

export default function StepProgress() {
  return (
    <section className="progress-container col col-12">
      <ProgressGroup 
        step="1"
        label="寄送地址"
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