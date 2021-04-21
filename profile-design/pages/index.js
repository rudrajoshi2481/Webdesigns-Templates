import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Show from "../Components/DesignShowOff/website-show";
import { motion } from "framer-motion";
import BackDesign from "../Components/DesignShowOff/background-design";

function Index() {
  const opactityVariant = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className={styles.App}>
      <div className={styles.hero__sec}>
        <Show />
        <BackDesign />
        <div className={styles.hero__sec__img}>
          <Image
            quality="30"
            // layout="fixed"
            src={"/profile.jpg"}
            width="270"
            height="470"
          />
        </div>
        <div className={styles.hero__details}>
          <motion.h1
            initial={opactityVariant.hidden}
            animate={opactityVariant.visible}
          >
            Rudra <span className={styles.stroke__joshi}>Joshi</span>
          </motion.h1>
          <p>
            Excepteur enim culpa nisi proident nulla laboris pariatur. Sint
            magna velit ipsum duis. Ad fugiat mollit occaecat in voluptate eu
            occaecat mollit.
          </p>
          <button>About ME </button>
        </div>
      </div>
      <br />
      <div className={styles.second__sec}>
        <h1 style={{margin:'.8em 0'}}> Backend & Frontend Softwares</h1>
        <span style={{backgroundColor:'purple',borderRadius:'5px',color:'white',padding:'5px 10px'}}>Node.js | express.js | MongoDb | React.js | Next.js </span>
        <div style={{margin:'1em 0'}}>
        <p>
          I have my expertise on backend and frontend framework like react.js ,express.js 
        </p>
        <p>
          Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit
          voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur
          fugiat veniam enim aliquip. Proident consequat velit ea est pariatur.
          Laboris ad consectetur occaecat do et fugiat adipisicing id do.
        </p>
        <p>
          Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit
          voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur
          fugiat veniam enim aliquip. Proident consequat velit ea est pariatur.
          Laboris ad consectetur occaecat do et fugiat adipisicing id do.
        </p>
        <p>
          Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit
          voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur
          fugiat veniam enim aliquip. Proident consequat velit ea est pariatur.
          Laboris ad consectetur occaecat do et fugiat adipisicing id do.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
