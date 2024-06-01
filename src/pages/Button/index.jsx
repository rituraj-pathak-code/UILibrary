import styles from "./index.module.css";
import {
  buttonWithEndIcon,
  buttonWithStartIcon,
  dangerButton,
  disabledButton,
  primaryButton,
  secondaryButton,
  successButton,
  warningButton,
} from "../../constants/buttonStrings";
import DisplayCode from "../../components/DisplayCode";
import {
  basicButtonsArray,
  coloredButtonsArray,
  iconButtonsArray,
  sizeButtonsArray,
} from "../../constants/buttonComponents";

const Buttons = () => {
  return (
    <div className={styles.superContainer}>
      <div className={styles.heading}>
        <h2 className="headingText">Buttons</h2>
        <p className="paragraphText">
          Buttons are interactive elements that users can click to perform
          actions. There are different types of buttons, each with its own
          purpose and behavior
        </p>
      </div>
      <div className={styles.container}>
        <div>
          <h3 className="subHeadingText">Basic Buttons</h3>
          <DisplayCode
            components={basicButtonsArray}
            codeString={`${primaryButton}${secondaryButton}`}
          />
        </div>
        <div>
          <h3 className="subHeadingText">Colored Buttons</h3>
          <DisplayCode
            components={coloredButtonsArray}
            codeString={`${successButton}${dangerButton}${warningButton}${disabledButton}`}
          />
        </div>
        <div>
          <h3 className="subHeadingText">Buttons with icons</h3>
          <DisplayCode
            components={iconButtonsArray}
            codeString={`${buttonWithStartIcon}${buttonWithEndIcon}`}
          />
        </div>
        <div>
          <h3 className="subHeadingText">Buttons Sizes</h3>
          <DisplayCode
            components={sizeButtonsArray}
            codeString={`${buttonWithStartIcon}${buttonWithEndIcon}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
