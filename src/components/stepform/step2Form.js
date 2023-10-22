import styles from './step2Form.module.css'

function ShippingInput({title, subtitle, price, bold = false, action = false}) {
  return (
    <div className={action ? styles.inputGroupAction : styles.inputGroup}>
      <input type="checkbox" className={styles.shippingInput} />
      <div className={styles.inputLabel}>
        <div className={styles.inputTitleGroup}>
          <text className={bold ? styles.inputTitleBold : styles.inputTitle }>{title}</text>
          <p className={styles.inputSubtitle}>{subtitle}</p>
        </div>
        <p className={styles.inputLabelPrice}>{price}</p>
      </div>
    </div>
  )
}

export default function Step2Form() {
  return (
    <div className="form-container">
      <form>
        <h3 className="form-title">運送方式</h3>
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
          bold={true}
        />
      </form>
    </div>
  )
}