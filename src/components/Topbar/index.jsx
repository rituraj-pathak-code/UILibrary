import React from 'react'
import styles from './index.module.css'
import logo from '/assets/logo.png'
import github from '/assets/github.png'


const Topbar = () => {
  return (
    <div className={styles.container} style={{}} >
        <img src={logo} className={styles.logo} alt="" />
        <a href="https://github.com/rituraj-pathak-code/UILibrary" target='_blank'>
            <img src={github} className={styles.github_logo} alt="" />
        </a>

    </div>
  )
}

export default Topbar