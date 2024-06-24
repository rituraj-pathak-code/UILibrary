import styles from './index.module.css'
import DisplayCode from '../../components/DisplayCode'
import { basicTextFieldArray, coloredTextFieldArray, errorTextFieldArray, sizeTextFieldArray } from '../../constants/textFieldComponents'
import { errorTextField, passwordTextField, primaryTextField, successTextField, warningTextField } from '../../constants/textFieldStrings'


const TextFieldPage = () => {
  return (
    <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2>TextFields</h2>
      <p>
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3>Basic TextFields</h3>
        <DisplayCode
          components={basicTextFieldArray}
          codeString={`${primaryTextField}${passwordTextField}`}
        />
      </div>
      <div>
        <h3>Colored TextFields</h3>
        <DisplayCode
          components={coloredTextFieldArray}
          codeString={`${successTextField}${warningTextField}`}
        />
      </div>
      <div>
        <h3>Sized TextField</h3>
        <DisplayCode
          components={sizeTextFieldArray}
          codeString={`${errorTextField}`}
        />
      </div>
      
    </div>
  </div>
  )
}

export default TextFieldPage