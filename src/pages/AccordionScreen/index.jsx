
import Accordion from '../../components/Accordion'
import styles from './index.module.css'
import DisplayCode from "../../components/DisplayCode";
import { basicAccordionArray, expandOneAccordionArray } from '../../constants/accordionComponents';
import { basicAccordion, expandOneAccordion } from '../../constants/accordionStrings';



const AccordionScreen = () => {
  return (
    <div className={styles.superContainer}>
      <div className={styles.heading}>
        <h2>Accordions</h2>
        <p>
          Buttons are interactive elements that users can click to perform
          actions. There are different types of buttons, each with its own
          purpose and behavior
        </p>
      </div>
      <div className={styles.container}>
        <div>
          <h3>Basic Accordion</h3>
          <DisplayCode
            components={basicAccordionArray}
            codeString={`${basicAccordion}`}
          />
        </div>
        <div>
          <h3>Expand One At a Time</h3>
          <DisplayCode
            components={expandOneAccordionArray}
            codeString={`${expandOneAccordion}`}
          />
        </div>
        
      </div>
    </div>
  )
}

export default AccordionScreen