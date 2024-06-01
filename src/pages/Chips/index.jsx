import React, { useState } from "react";
import styles from "./index.module.css";
import Chip from "../../components/Chip/index";
import ChipGroup from "../../components/ChipGroup";
import DisplayCode from "../../components/DisplayCode";
import { basicChip, chipGroup, errorChip, primaryChip, secondaryChip } from "../../constants/chipString";

const chipValues = [
  {
    id: 1,
    label: "React",
  },
  {
    id: 2,
    label: "Angular",
  },
  {
    id: 3,
    label: "Vue",
  },
  {
    id: 4,
    label: "Svelte",
  },
  {
    id: 5,
    label: "Java",
  },
  {
    id: 6,
    label: "Rust",
  },
  {
    id: 7,
    label: "C++",
  },
];
const Chips = () => {
  const [chipContent, setChipContent] = useState(chipValues);
  const deleteHandler = (id) => {
    setChipContent(chipContent.filter((item) => id !== item.id));
  };
  const basicChipArray = [
    <Chip label={"Chip"} key={1} />,
    <Chip label={"Chip"} type={"primary"} key={2} />,
    <Chip label={"Chip"} type={"secondary"} key={3} />,
    <Chip label={"Chip"} type={"error"} key={4} />,
  ];
  
  const chipgroupArray = [
      <ChipGroup key={1}>
           {chipContent?.map((item) => (
                <Chip
                  label={item.label}
                  key={item.id}
                  onDelete={() => deleteHandler(item.id)}
                />
              ))}
            </ChipGroup>
    ];

  return (
    <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2>Chips</h2>
      <p>
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3>Basic Chips</h3>
        <DisplayCode
          components={basicChipArray}
          codeString={`${basicChip}${primaryChip}${secondaryChip}${errorChip}`}
        />
      </div>
      <div>
        <h3>Chip group</h3>
        <DisplayCode
          components={chipgroupArray}
          codeString={`${chipGroup}`}
        />
      </div>
    
    
      
    </div>
  </div>
  );
};

export default Chips;
