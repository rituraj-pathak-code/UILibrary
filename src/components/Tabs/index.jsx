import { useState } from "react";
import styles from "./index.module.css";


const Tabs = ({tabItems, width}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div >
      <div className={styles.tabContainer} style={{width:width}}>
        {tabItems?.map((item, key) => (
          <div
            onClick={() => setSelectedTab(key)}
            key={key}
            className={`${styles.tab} ${
              selectedTab == key && styles.activeTab
            }`}
          >
            <span> {item?.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabItems[selectedTab]?.component}
      </div>
    </div>
  );
};

export default Tabs;
