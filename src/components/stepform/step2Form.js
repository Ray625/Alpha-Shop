import styles from './step2Form.module.css'

function ShippingInput({title, subtitle, price, action = false}) {
  return (
    <div className={action ? styles.inputGroupAction : styles.inputGroup}>
      <input type="checkbox" className={styles.shippingInput} id={title}/>
      <label className={styles.inputLabel} htmlFor={title}>
        <div className={styles.inputTitleGroup}>
          <text className={styles.inputTitle}>{title}</text>
          <p className={styles.inputSubtitle}>{subtitle}</p>
        </div>
        <p className={styles.inputLabelPrice}>{price}</p>
      </label>
    </div>
  )
}

export default function Step2Form() {
  return (
    <div className="form-container">
      <form>
        <h3 className="form-title">運送方式</h3>
        <section className='form-body'>
        <ShippingInput 
          title="標準運送"
          subtitle="約 3~7 個工作天 "
          price="免費"
          action={true}
        />
        <ShippingInput 
          title="DHL 貨運"
          subtitle="48 小時送達 "
          price="$500"
        />                  
        </section>
      </form>
    </div>
  )
}