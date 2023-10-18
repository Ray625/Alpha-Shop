

function ProgressGroup({step, label}) {
  return (
    <span class="progress-group" data-phase="address">
      <span class="progress-icon">
        <span class="text">{step}</span>
      </span>
      <span class="progress-label">{label}</span>
    </span> 
  )
}

export default function StepProgress() {
  return (
    <section class="progress-container col col-12">
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