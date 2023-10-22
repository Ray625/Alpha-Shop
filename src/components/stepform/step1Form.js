import styles from './step1Form.module.css';

function SelectInput({title, label, array, class2}) {
  const list = array.map( item => {
    return <option value={item.value}>{item.option}</option>     
  })

  return (
    <div className={styles.inputGroup + class2}>
      <label className={styles.inputLabel} htmlFor={label}>{title}</label>
      <div className={styles.selectContainer}>
        <select className={styles.selectControl} required id={label}>
          {list}
        </select>
      </div>
    </div>
  )
}

function DataInput({data, type="text", placeholder, label, class2}) {
  return (
    <div className={styles.inputGroup + class2} >
      <label className={styles.inputLabel} htmlFor={label}>{data}</label>
      <input type={type} placeholder={'請輸入'+placeholder} className={styles.inputControl} id={label} />
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

export default function Step1Form() {
  return (
    <div className='form-container'>
      <form>
        <h3 className='form-title'>寄送地址</h3>
        <section className='form-body'>
          <InputCol>
            <SelectInput 
            title='稱謂'
            label='title'
            array={[
              {value:'mr',option: '先生'}, 
              {value:'ms',option: '女士'}, 
              {value:'mx',option: '不明'}
              ]} 
            class2=" title-input-group"/>
            <DataInput 
              data="姓名"
              placeholder="姓名"
              label="name"
              class2=" name-input-group"
            />
          </InputCol>

          <InputCol>
            <DataInput 
              data="電話"
              type="tel"
              placeholder="行動電話"
              label="tel"
              class2=" tel-input-group"
              />
            <DataInput 
              data="Email"
              type="email"
              placeholder="電子郵件"
              label="email"
              class2=" email-input-group"
              />
          </InputCol>

          <InputCol>
            <SelectInput 
            title="縣市"
            label="city"
            array={[
              {value:"",option:'請選擇縣市'},
              {value:"KLU",option:'基隆市'},
              {value:"TPH",option:'新北市'},
              {value:"TPE",option:'臺北市'},
              {value:"TYC",option:'桃園市'},
              {value:"HSH",option:'新竹縣'},
              {value:"HSC",option:'新竹市'},
              {value:"MAC",option:'苗栗市'},
              {value:"MAL",option:'苗栗縣'},
              {value:"TXG",option:'臺中市'},
              {value:"CWH",option:'彰化縣'},
              {value:"CWS",option:'彰化市'},
              {value:"NTC",option:'南投市'},
              {value:"NTO",option:'南投縣'},
              {value:"YLH",option:'雲林縣'},
              {value:"CHY",option:'嘉義縣'},
              {value:"CYI",option:'嘉義市'},
              {value:"TNN",option:'臺南市'},
              {value:"KHH",option:'高雄市'},
              {value:"IUH",option:'屏東縣'},
              {value:"PTS",option:'屏東市'},
              {value:"ILN",option:'宜蘭縣'},
              {value:"ILC",option:'宜蘭市'},
              {value:"HWA",option:'花蓮縣'},
              {value:"HWC",option:'花蓮市'},
              {value:"TTC",option:'臺東市'},
              {value:"TTT",option:'臺東縣'},
              {value:"PEH",option:'澎湖縣'},
              {value:"KMN",option:'金門縣'},
              {value:"LNN",option:'連江縣'},
            ]} 
            class2=" city-input-group"
            />
            <DataInput 
              data="地址"
              placeholder="地址"
              label="address"
              class2=" address-input-group"
            />
          </InputCol>
        </section>
      </form>
    </div>
  )
}

