
import { useState } from 'react';
import styles from './index.module.css'

const ChipGroup = ({children}) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [showAll, setShowAll] = useState(false);
  
    const showMore = () => {
      setVisibleCount(children?.length);
      setShowAll(true);
    };
  
    const showLess = () => {
      setVisibleCount(4);
      setShowAll(false);
    };
    if(children?.length>0){
        return (
            <div className={styles.container}>
            {children.slice(0, visibleCount)}
              {children.length > visibleCount && !showAll && (
                <button onClick={showMore} className={styles.button}>{children.length - 4} More</button>
              )}
              {showAll && (
                <button onClick={showLess} className={styles.button}>Show Less</button>
              )}
          </div>
          )
    }
 
}

export default ChipGroup