import rightArrow from 'icons/right-arrow.svg';
import leftArrow from 'icons/left-arrow.svg';
import 'style/progress-control.css'


function Button({text, label, image = false}) {
  if (image === rightArrow) {
    return (
      <button className={'button ' + label}>
      {text}
      <object data={image} className="next-cursor-point">
      </object>
    </button>
    )
  } else if (image === leftArrow) {
    return (
      <button className={label + ' button'}>
      <object data={image} className="prev-cursor-point">
      </object>
      {text}
    </button>
    )
  } else {
    return (
      <button className={label + ' button'}>
      {text}
    </button>
    )
  }
}

export default function ProgressControler({step}) {
  if(step === 1) {
    return (
      <div className="progress-control-container">
        <section className="button-group">
          <Button text="上一步" label='invisible prev-button ' image={leftArrow}/>
          <Button text="下一步" label='next-button' image={rightArrow}/>
        </section>
      </div>
    )
  }else if(step === 2) {
    return (
      <div className="progress-control-container">
        <section className="button-group">
          <Button text="上一步" label='prev-button ' image={leftArrow}/>
          <Button text="下一步" label='next-button' image={rightArrow}/>
        </section>
      </div>
    )
  }else if(step === 3) {
    return (
      <div className="progress-control-container">
        <section className="button-group">
          <Button text="上一步" label='prev-button ' image={leftArrow}/>
          <Button text="確認下單" label='next-button' />
        </section>
      </div>
    )
  }
}