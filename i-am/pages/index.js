import React from 'react'
import AnimateStarter from '../components/AnimateStarter'
import Arrow from '../components/icons/arrow'
import styles from '../styles/Home.module.css'
function Index() {
  return (
    <div className={styles.index__container}>
      {/* <AnimateStarter /> */}
      <h1 className={styles.brand__name}> I'am <br />Mohit Hinduja</h1>
      <span className={styles.about__me__span} style={{paddingRight:'5px'}}>About Me <span style={{padding:' 0 8px'}}> <Arrow /></span></span>
    </div>
  )
}

export default Index
