export const simpleStepper = `import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Button from "../Button/";

//Stepper Component
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
  const handleReset = () => {
    setCurrentStep(1);
    setIsCompleted(false);
  }
  const calculateProgressbarWidth = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };
  if (steps.length == 0) {
    return <></>;
  }
  return (
    <>
      <div className={styles.stepper}>
        {steps.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={\`\${styles.step}  \${currentStep > index + 1 || isCompleted ? styles.complete_step : ""}
             \${currentStep == index + 1 && styles.active_step} \`}>
            <div className={\`\${styles.step_number} \`}>
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
            width: \`calc(100% - \${margins.marginLeft + margins.marginRight}px)\`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}>
          <div
            className={styles.progress}
            style={{ width: \`\${calculateProgressbarWidth()}%\` }}
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
        {!isCompleted ? (
          <Button onClick={handleNext} category={"primary"}>
            {currentStep == steps.length ? "Finish" : "Next"}
          </Button>
        ) : (
          <Button onClick={handleReset} category={"error"}>
            {"Reset"}
          </Button>
        )}
      </div>
    </>
  );
};

// Use Stepper component in your page. 
const STEPS = [
    {
        name: "Customer Info",
        Component: () => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Customer Info Tab</div>
    },
    {
        name: "Shipping Info",
        Component:() => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Shipping Info Tab</div>
    },
    {
        name: "Payment Info",
        Component: () => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Payment Info Tab</div>
    },
    {
        name: "Delivered",
        Component:() => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Delivered Tab</div>
    },
]
<Stepper steps={STEPS}/>`

export const stepperStyles = `//styles for stepper component
.stepper{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.step{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.step_number {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    z-index: 2;
}
.step_name{
    font-size: 14px;
}

.active_step .step_number {
    background-color: blue;
    color: white;
}
.complete_step .step_number{
    background-color: green;
    color: white;
}
.progress_bar{
    position: absolute;
    top: 27%;
    left: 0;
    height: 3px;
    background-color: #ccc;
}
.progress{
    height: 100%;
    background-color: green;
    transition: 0.2 ease;
}
.buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}`