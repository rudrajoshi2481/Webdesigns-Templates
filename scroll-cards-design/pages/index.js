import React from "react";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import Square from "../components/Icons/square"

function Index(props) {
  const [cardData, setCardData] = React.useState(props.data.data);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.card__container}>
        {cardData.map((item) => {
          return (
            <Card
              key={item.index}
              img={item.img}
              title={item.title}
              para={item.para}
              index={item.index}
            />
          );
        })}
      </div>
    </>
  );
}

const Card = ({ img, title, para, index }) => {
  return (
    <div className={styles.card} key={index}>
      <div>
        {/* Image */}
        {/* 01 */}
        <div 
        className={styles.card__shadow}
        >
          <span style={{position:"relative"}}><Square /></span>
        <Image
        className={styles.card__img}
          src={img}
          alt={img}
          layout={"intrinsic"}
          width={320}
          height={400}
        />
        </div>
        <h1>{index}</h1>
      </div>
      <div className={styles.card__details}>
        <h2>{title}</h2>
        <p>{para}</p>
        {/* Title */}
        {/* para */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Index;
