import React from "react";
import RadioGroup from "../../components/RadioGroup";
import RadioButton from "../../components/RadioButton";
import styles from "./index.module.css";
import DisplayCode from "../../components/DisplayCode";
import { basicRadioButtonArray, coloredRadioButtonArray, largeRadioButtonArray, smallRadioButtonArray } from "../../constants/radioButtonComponents";
import { basicRadioButtons, coloredRadioButtons, largeRadioButtons, smallRadioButtons } from "../../constants/radioButtonStrings";

const RadioButtons = () => {
  const handleChange = () => {};
  return (
    <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2>Radio Buttons</h2>
      <p>
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3>Basic Radio Buttons</h3>
        <DisplayCode
          components={basicRadioButtonArray}
          codeString={`${basicRadioButtons}`}
        />
      </div>
      <div>
        <h3>Colored Radio Buttons</h3>
        <DisplayCode
          components={coloredRadioButtonArray}
          codeString={`${coloredRadioButtons}`}
        />
      </div>
      <div>
        <h3>Large Radio Buttons</h3>
        <DisplayCode
          components={largeRadioButtonArray}
          codeString={`${largeRadioButtons}`}
        />
      </div>
      <div>
        <h3>Small Radio Buttons</h3>
        <DisplayCode
          components={smallRadioButtonArray}
          codeString={`${smallRadioButtons}`}
        />
      </div>
      
    </div>
  </div>
  );
};

export default RadioButtons;
