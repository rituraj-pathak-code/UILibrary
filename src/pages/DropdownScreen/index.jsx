import React, { useState } from "react";
import styles from "./index.module.css";
import Chip from "../../components/Chip/index";
import ChipGroup from "../../components/ChipGroup";
import Dropdown from "../../components/Dropdown";

const dropdownValues =  [
    {
      id: 1,
      name: "JavaScript",
      value: "javascript"
    },
    {
      id: 2,
      name: "Java",
      value: "java"
    },
    {
      id: 3,
      name: "C++",
      value: "c++"
    },
    {
      id: 4,
      name: "Rust",
      value: "rust"
    },
    {
      id: 5,
      name: "Golang",
      value: "golang"
    },
    {
      id: 6,
      name: "Python",
      value: "python"
    },
    {
      id: 7,
      name: "C#",
      value: "csharp"
    },
    {
      id: 8,
      name: "Kotlin",
      value: "kotlin"
    },
    {
      id: 9,
      name: "Swift",
      value: "swift"
    },
    {
      id: 10,
      name: "Assembly",
      value: "assembly"
    },

  ]


const DropdownScreen = () => {

const [selectedValue, setSelectedValue] = useState("")

console.log(selectedValue)

  return (
    <div>
      <h2>Dropdown</h2>
      <div className={styles.dropContainer}>
        <div className={styles.dropdowns}>
          <Dropdown title={"Select language"} dropdownValues={dropdownValues} setSelectedValue={setSelectedValue} selectedValue = {selectedValue}/>
        </div>
       
      </div>
    </div>
  );
};

export default DropdownScreen;
