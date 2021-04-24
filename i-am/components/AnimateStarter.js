import React from "react";
import styles from '../styles/Home.module.css'
import Arrow from '../components/icons/arrow'

function AnimateStarter() {
  return (
    <div
      style={{
          height: "100vh",
          zIndex:'-5',
          width: "25vw",
        //   position: "absolute",
        //   background: "black",
          
      }}
    >

{/* <h1 className={styles.brand__name} style={{color:'white'}}> I'am <br />Mohit Hinduja</h1> */}
      {/* <span className={styles.about__me__span} style={{paddingRight:'5px'}}>About Me <span style={{padding:' 0 8px'}}> <Arrow /></span></span> */}
    </div>
  );
}

export default AnimateStarter;
