import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Button from "../Button/";
import { FaCheck } from "react-icons/fa6";

const Stepper = ({ steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  useEffect(() => {
    console.log(stepRef.current[0].offsetWidth);
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steps.length - 1].offsetWidth / 2,
    });
  }, []);

  if (steps.length == 0) {
    return <></>;
  }

  const ActiveComponent = steps[currentStep - 1].Component;

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev == steps.length) {
        setIsCompleted(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  const handlePrev = () => {
    setCurrentStep((prev) => {
      if (isCompleted) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const calculateProgressbarWidth = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };
  return (
    <>
      <div className={styles.stepper}>
        {steps.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`${styles.step}  ${
              currentStep > index + 1 || isCompleted ? styles.complete_step : ""
            }
             ${currentStep == index + 1 && styles.active_step} `}
          >
            <div
              className={`${styles.step_number} 
             `}
            >
              {currentStep > index + 1 || isCompleted ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className={styles.step_name}>{step?.name}</div>
          </div>
        ))}

        <div
          className={styles.progress_bar}
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className={styles.progress}
            style={{ width: `${calculateProgressbarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      <div className={styles.buttons}>
        <Button
          onClick={handlePrev}
          category={currentStep == 1 || isCompleted ? "disabled" : "secondary"}
        >
          {"Back"}
        </Button>

        <Button
          onClick={handleNext}
          category={isCompleted ? "disabled" : "primary"}
        >
          {currentStep == steps.length ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default Stepper;
