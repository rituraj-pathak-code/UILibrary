
import Tabs from '../../components/Tabs'
import styles from './index.module.css'


const tabItems = [
    {
      label: "Tab One",
      component: <div>Body for Tab One</div>,
    },
    {
      label: "Tab Two",
      component: <div>Body for tab two</div>,
    },
    {
      label: "Tab Three",
      component: <div>Body for tab Three</div>,
    },
  ];
  
const TabsScreen = () => {
  return (
    <div>
      <h2>Tabs</h2>
     <div className={styles.tabsContainer}>
     <Tabs tabItems={tabItems} width={'100%'}/>
     <Tabs tabItems={tabItems}/>
     </div>
    </div>
  )
}

export default TabsScreen