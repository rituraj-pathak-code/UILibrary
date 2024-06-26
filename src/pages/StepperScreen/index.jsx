import styles from './index.module.css'
import DisplayCode from '../../components/DisplayCode'
import { basicStepperArray } from '../../constants/stepperComponent'
import { simpleStepper } from '../../constants/stepperStrings'



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
        <DisplayCode
          codeString={`${simpleStepper}`}
        />
      </div>
      
    </div>
  </div>
  )
}

export default StepperScreen