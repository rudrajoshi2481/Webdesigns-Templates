import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Show from "../Components/DesignShowOff/website-show";

function Index() {
  return (
    <div className={styles.App}>
      <Show />
      <div className={styles.brand__name}>
        <span>Rudra Joshi</span>
        <div className={styles.brand__name__details}>
          <br />
          <p>
            Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut
            velit laboris velit veniam ut ut officia ad ex quis aliquip
            incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum
            anim pariatur veniam cillum Lorem labore eu fugiat do. Irure
            adipisicing id quis fugiat sint consectetur elit do. Incididunt
            voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla
            ullamco in ullamco id laboris ex cillum voluptate ullamco.
          </p>
          {/* <br /> */}
          {/* <p>Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut velit laboris velit veniam ut ut officia ad ex quis aliquip incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum anim pariatur veniam cillum Lorem labore eu fugiat do. Irure adipisicing id quis fugiat sint consectetur elit do. Incididunt voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla ullamco in ullamco id laboris ex cillum voluptate ullamco.</p> */}
          <br />
        </div>
        <button>About Me</button>
      </div>
      <div className={styles.profile__image}>
        {/* <Image src="/profile.jpg" layout="fixed" width="330" height="580"  /> */}
      </div>
      
    <div style={{marginTop:"100vh"}}>
      
      <p>Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut velit laboris velit veniam ut ut officia ad ex quis aliquip incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum anim pariatur veniam cillum Lorem labore eu fugiat do. Irure adipisicing id quis fugiat sint consectetur elit do. Incididunt voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla ullamco in ullamco id laboris ex cillum voluptate ullamco.</p>
      <p>Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut velit laboris velit veniam ut ut officia ad ex quis aliquip incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum anim pariatur veniam cillum Lorem labore eu fugiat do. Irure adipisicing id quis fugiat sint consectetur elit do. Incididunt voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla ullamco in ullamco id laboris ex cillum voluptate ullamco.</p>
      <p>Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut velit laboris velit veniam ut ut officia ad ex quis aliquip incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum anim pariatur veniam cillum Lorem labore eu fugiat do. Irure adipisicing id quis fugiat sint consectetur elit do. Incididunt voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla ullamco in ullamco id laboris ex cillum voluptate ullamco.</p>
      <p>Commodo laborum fugiat excepteur ipsum ea nisi fugiat eu in. Ut velit laboris velit veniam ut ut officia ad ex quis aliquip incididunt. Nulla et nulla consectetur ipsum non ex ex ut. Cillum anim pariatur veniam cillum Lorem labore eu fugiat do. Irure adipisicing id quis fugiat sint consectetur elit do. Incididunt voluptate enim veniam aute eiusmod. Ullamco voluptate ut nulla ullamco in ullamco id laboris ex cillum voluptate ullamco.</p>
    </div>

    </div>
  );
}

export default Index;
