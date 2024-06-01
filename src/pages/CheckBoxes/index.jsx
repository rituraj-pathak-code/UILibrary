import React from 'react'
import styles from './index.module.css'
import Checkbox from '../../components/Checkbox'

const CheckBoxes = () => {
  return (
 <div>
    <h2>Checkboxes</h2>
    <div className={styles.checkContainer}>
      <div className={styles.checks}>
            <Checkbox label='React' value={'react'}/>
            <Checkbox label='Angular' value={'angular'}/>
            <Checkbox label='Vue' value={'vue'}/>
            <Checkbox label='Svelte' value={'svelte'}/>
      </div>
      <div className={styles.checks} >
            <Checkbox label='React' value={'react'} category='primary'/>
            <Checkbox label='Angular' value={'angular'} category='error'/>
            <Checkbox label='Vue' value={'vue'} category='disabled'/>
            <Checkbox label='Svelte' value={'svelte'} category='success'/>
      </div>
      <div className={styles.checks} >
            <Checkbox label='React' value={'react'} category='primary' size='large'/>
            <Checkbox label='Angular' value={'angular'} category='error' size='large'/>
            <Checkbox label='Vue' value={'vue'} category='disabled' size='large'/>
            <Checkbox label='Svelte' value={'svelte'} category='success' size='large'/>
      </div>
      <div className={styles.checks} >
            <Checkbox label='React' value={'react'} category='primary' size='small'/>
            <Checkbox label='Angular' value={'angular'} category='error' size='small'/>
            <Checkbox label='Vue' value={'vue'} category='disabled' size='small'/>
            <Checkbox label='Svelte' value={'svelte'} category='success' size='small'/>
      </div>
    </div>
  </div>
  )
}

export default CheckBoxes