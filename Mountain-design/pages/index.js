import React from "react";

function Index() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0 5vw" }}>
        <ShowBar />
        <div
        className="hide-scrollbar"
      style={{ display: "flex", overflowX: "scroll", scrollBehavior: "smooth" }}
    >
      
        <ImageScrollBar  imageId="./image01.jpg" title="Mountians" para="Aliqua deserunt ipsum anim est fugiat dolor qui occaecat culpa qui adipisicing magna ea dolor. "/>
        <ImageScrollBar imageId="./image01.jpg" title="Mountians" para="Aliqua deserunt ipsum anim est fugiat dolor qui occaecat culpa qui adipisicing magna ea dolor. "/>
        <ImageScrollBar imageId="./image01.jpg" title="Mountians" para="Aliqua deserunt ipsum anim est fugiat dolor qui occaecat culpa qui adipisicing magna ea dolor. "/>
        <ImageScrollBar imageId="./image01.jpg" title="Mountians" para="Aliqua deserunt ipsum anim est fugiat dolor qui occaecat culpa qui adipisicing magna ea dolor. "/>
        <ImageScrollBar imageId="./image01.jpg" title="Mountians" para="Aliqua deserunt ipsum anim est fugiat dolor qui occaecat culpa qui adipisicing magna ea dolor. "/>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "0vh 10px",
        margin: "0vh 10px",
      }}
    >
      <span
        style={{
          fontSize: "calc(14px + .5em)",
          fontWeight: "bolder",
          fontVariant: "small-caps",
        }}
      >
        Mountain<span style={{ color: "red" }}>.</span>
      </span>
      <span className="hide-mobile">Menu</span>
    </nav>
  );
};

const ShowBar = () => {
  return (
    <div
      style={{
        paddingTop: "calc(25px + 5vh) ",
        paddingBottom: "5vh",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ fontSize: "calc(18px + 1.0em)" }}>
        BECOME A TRAVEL PRO IN ONE EASY LESSON
      </h1>
      <span
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            padding: "8px 22px ",
            margin: "15px 0",
            background: "none",
            border: "1px solid green",
            borderRadius: "8px",
            paddingRight: "45px",
            fontWeight: "500",
            color: "green",
          }}
        >
          MORE ANGELS
        </button>
      </span>
    </div>
  );
};

const ImageScrollBar = ({imageId,title,para,active}) => {

  const [showImgDetailBlock,setShowImgDetailBlock] = React.useState(active ? 1 : 0)

  return (
    
      <div
      onMouseEnter={e => {console.log("MOUSE ENTER");setShowImgDetailBlock(1)}}
      onMouseOver={e => console.log("MOUSE OVER")}
      onMouseLeave={e => {console.log("MOUSE LEAVE");setShowImgDetailBlock(0)}}
        style={{
          padding: "  3vh 15px",
          width: "calc(230px + 5vw)",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          
        }}
      >
        <img src={`${imageId}`} style={{ height: "40vh" }}></img>
        {
          showImgDetailBlock != 0  ? <div style={{position:'relative'}} className="img-details-block">
          <span style={{ fontSize: "32px" }}>{title}</span>
          <p>
            {para}
          </p>
        </div> : null
        }

        
      </div>
  );
};

export default Index;
