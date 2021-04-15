import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Show from '../Components/DesignShowOff/website-show'
function Index() {
  return (
    <div className={styles.App}>

      <div className={styles.hero__sec}>
        <Show />
          <div className={styles.hero__sec__img}>
          <Image quality="30" layout="fixed" src={"/profile.jpg"} width="300" height="500" />
          </div>
          <div className={styles.hero__details}>
            <h1>Rudra Joshi</h1>
            <p>Excepteur enim culpa nisi proident nulla laboris pariatur. Sint magna velit ipsum duis. Ad fugiat mollit occaecat in voluptate eu occaecat mollit.</p>
            <button>About ME </button>
          </div>
      </div><br />
      <div className={styles.second__sec}>
        <h1>Web Applications & Backend Applications</h1>
        <p>Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur fugiat veniam enim aliquip. Proident consequat velit ea est pariatur. Laboris ad consectetur occaecat do et fugiat adipisicing id do.</p>
        <p>Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur fugiat veniam enim aliquip. Proident consequat velit ea est pariatur. Laboris ad consectetur occaecat do et fugiat adipisicing id do.</p>
        <p>Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur fugiat veniam enim aliquip. Proident consequat velit ea est pariatur. Laboris ad consectetur occaecat do et fugiat adipisicing id do.</p>
        <p>Eiusmod exercitation laborum nostrud eu ut non. Ea do commodo elit voluptate consequat ipsum reprehenderit. Ex duis tempor consectetur fugiat veniam enim aliquip. Proident consequat velit ea est pariatur. Laboris ad consectetur occaecat do et fugiat adipisicing id do.</p>
      </div>
    </div>
  )
}

export default Index
