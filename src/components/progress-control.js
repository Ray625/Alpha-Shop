function Button({text}) {
  return (
    <button>
      {text}
    </button>
  )
}

export default function ProgressControler() {
  return (
    <section className="button-group">
      <Button text="上一步" className='prev-button' />
      <Button text="下一步" className='next-button' />
    </section>
  )
}