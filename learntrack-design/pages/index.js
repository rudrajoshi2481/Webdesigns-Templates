import React from "react";
import Image from 'next/image'
import Header from "../Components/Header";
import SquareD from "../Components/Icons/square-design";
import Arrow from "../Components/Icons/arrow"
import styles from "../styles/Home.module.css";

function Index(props) {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.App__innercontainer}>
        <div className={styles.App__storysec}>
          {/* story */}
          <StorySec />
        </div>
        <div className={styles.App__imagesec}>
          {/* Image */}
          <ImageSec  />
        </div>
      </div>
    </div>
  );
}

// Story Has 2 Components

// Image
const ImageSec = () => {
  return <div>
    <div className={styles.image__detail}>
      {/* <Image src={"/img01.jpg"} layout={"responsive"} width={30} height="40" /> */}
      <Image src={"/img01.jpg"} layout={"fixed"} width={400} height="500" />
    </div>
      <span className={styles.image__detail__design} style={{position:'absolute',top:'60%',left:"70%"}}><SquareD size={180}/></span>
  </div>;
};

// Details 01 Story
const StorySec = () => {
  return (
    <div>
      {/* Flex 01 */}
      {/* Square Design */}
      <div className={styles.square__design__sec}>
        <span className={styles.square__design__storysec}>
          <SquareD />
        </span>
        <div className={styles.square__design__start__text}>The Start</div>
      </div>

      {/* Flex 02 */}
      {/* 01 */}
      {/* Story */}
      <div className={styles.story__Details__sec}>
        <h1 className={styles.story__Details__h1}>01</h1>
        <div className={styles.story__Details__innerdiv}>
        <span className={styles.story__Details__story}>The Story</span>
        <p>Ut sit ex mollit laboris tempor elit incididunt velit ex adipisicing tempor ullamco. Dolore magna incididunt incididunt dolore cillum tempor irure fugiat officia aute amet Lorem et occaecat. Reprehenderit culpa veniam ea nulla anim dolor nulla officia anim enim. Occaecat cupidatat laborum occaecat ut minim do ex cupidatat proident velit. Excepteur fugiat commodo duis non in consectetur est.</p>
        <span className={styles.story__Details__readmore}>Read More <Arrow /></span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Index;
