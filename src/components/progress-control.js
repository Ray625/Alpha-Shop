import rightArrow from '../icons/right-arrow.svg';
import leftArrow from '../icons/left-arrow.svg';
import '../style/progress-control.css'


function Button({text, label, image = false}) {
  if (image === rightArrow) {
    return (
      <button className={'button ' + label}>
      {text}
      <object data={image} class="next-cursor-point">
      </object>
    </button>
    )
  } else if (image === leftArrow) {
    return (
      <button className={label + ' button'}>
      <object data={image} class="prev-cursor-point">
      </object>
      {text}
    </button>
    )
  }
  return (
    <button>
      {text}
    </button>
  ) 
}

export default function ProgressControler() {
  return (
    <section className="button-group">
      <Button text="上一步" label='prev-button' image={leftArrow}/>
      <Button text="下一步" label='next-button' image={rightArrow}/>
    </section>
  )
}