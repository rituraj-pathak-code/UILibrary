import React from "react";
import Label from "../../components/Label";
import styles from "./index.module.css";
import userIcon from '/assets/user.png'
import successIcon from '/assets/success_icon.png'

const Labels = () => {
  return (
    <div>
      <h2>Labels</h2>
      <div className={styles.labelContainer}>
        <Label
          type="primary"
          startIcon={userIcon}
          endIcon={userIcon}
          borderRadius="normal"
          size="normal"
        >
          Label
        </Label>
        <Label
          type="primary"
          endIcon={userIcon}
          borderRadius="normal"
          size="normal"
        >
          Label
        </Label>
        <Label
          type="primary"
          startIcon={userIcon}
          borderRadius="normal"
          size="normal"
        >
          Label
        </Label>
        <Label
          type="secondary"
          startIcon={userIcon}
          endIcon={userIcon}
          borderRadius="normal"
          size="normal"
        >
          Label
        </Label>
      </div>
    </div>
  );
};

export default Labels;
