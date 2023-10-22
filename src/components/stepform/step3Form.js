import styles from './step3Form.module.css'

function DataInput({data, type="text", placeholder, label, class2}) {
  return (
    <div className={styles.inputGroup + class2} >
      <label className={styles.inputLabel} htmlFor={label}>{data}</label>
      <input type={type} placeholder={placeholder} className={styles.inputControl} id={label} />
    </div>
  )
}

function InputCol({children}) {
  return (
    <div className={styles.inputCol}>
      {children}
    </div>
  ) 
}

export default function Step3Form() {
  return (
    <div className='form-container'>
      <form>
        <h3 className='form-title'>付款資訊</h3>
        <section className='form-body'>
          <InputCol>
            <DataInput 
              data="持卡人姓名"
              placeholder="John Doe"
              label="card-name"
              class2=" card-name-input-group"
            />
          </InputCol>

          <InputCol>
            <DataInput 
              data="卡號"
              placeholder="1111 2222 3333 4444"
              label="card-number"
              class2=" card-number-input-group"
            />
          </InputCol>

          <InputCol>
            <DataInput 
              data="有效期限"
              placeholder="MM/YY"
              label="rexpiry-date"
              class2=" rexpiry-date-input-group"
            />
            <DataInput 
              data="CVC / CCV"
              placeholder="123"
              label="cvc/ccv"
              class2=" cvc-input-group"
            />
          </InputCol>
        </section>
      </form>
    </div>
  )
}