import styles from "./index.module.css";
import {
  basicButtons,
  buttonWithEndIcon,
  buttonWithStartIcon,
  coloredButtons,
  dangerButton,
  disabledButton,
  iconButtons,
  outlinedButtons,
  primaryButton,
  secondaryButton,
  sizedButtons,
  successButton,
  warningButton,
} from "../../constants/buttonStrings";
import DisplayCode from "../../components/DisplayCode";
import {
  basicButtonsArray,
  outlinedButtonsArray,
  coloredButtonsArray,
  iconButtonsArray,
  sizeButtonsArray,
} from "../../constants/buttonComponents";


const Buttons = () => {
  return (
    <div className={styles.superContainer}>
      <div className={styles.heading}>
        <h2>Buttons</h2>
        <p>
          Buttons are interactive elements that users can click to perform
          actions. There are different types of buttons, each with its own
          purpose and behavior
        </p>
      </div>
      <div className={styles.container}>
        <div>
          <h3>Basic Buttons</h3>
          <DisplayCode
            components={basicButtonsArray}
            codeString={`${basicButtons}`}
          />
        </div>
        <div>
          <h3>Colored Buttons</h3>
          <DisplayCode
            components={coloredButtonsArray}
            codeString={`${coloredButtons}`}
          />
        </div>
        <div>
          <h3>Outlined Buttons</h3>
          <DisplayCode
            components={outlinedButtonsArray}
            codeString={`${outlinedButtons}`}
          />
        </div>
        <div>
          <h3>Buttons Sizes</h3>
          <DisplayCode
            components={sizeButtonsArray}
            codeString={`${sizedButtons}`}
          />
        </div>
        <div>
          <h3>Buttons with icons</h3>
          <DisplayCode
            components={iconButtonsArray}
            codeString={`${iconButtons}`}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Buttons;
