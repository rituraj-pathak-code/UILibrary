import styles from './index.module.css'
import DisplayCode from '../../components/DisplayCode'
import { basicStepperArray } from '../../constants/stepperComponent'
import { simpleStepper, stepperStyles } from '../../constants/stepperStrings'



const StepperScreen = () => {
  return (
    <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2>Stepper</h2>
      <p>
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3>Basic TextFields</h3>
        <div className={styles.component}>
            {basicStepperArray[0]}
        </div>
        <div className={styles.displaycode}>
          <DisplayCode
            codeString={`${simpleStepper}`}
          />
          <DisplayCode
            codeString={`${stepperStyles}`}
          />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default StepperScreen