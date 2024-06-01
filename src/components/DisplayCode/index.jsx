import React from 'react'
import Button from '../Button'
import styles from './index.module.css'
import CodeHighlight from '../CodeHighlight'
import { primaryButton, secondaryButton } from '../../constants/buttonStrings'

const DisplayCode = ({components=[], codeString=''}) => {
  return (
    <div className={styles.codeContainer}>
            <div className={styles.components}>
                {components.map((item)=> (
                    item
                ))}
            </div>
            <div >
              <CodeHighlight
                codeString={codeString}
              />
            </div>
          </div>
  )
}

export default DisplayCode