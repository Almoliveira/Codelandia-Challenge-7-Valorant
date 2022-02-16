import styles from "./Layout.module.css";
import Image1 from "../assets/img/logo.png";
import Image2 from "../assets/img/share.png";

import FacebookLogo from "../assets/img/facebook.png";
import TwitterLogo from "../assets/img/twitter.png";
import InstagramLogo from "../assets/img/instagram.png";

const Layout = (props) => {
  return (
    <div>
      <div className={styles.valorantBackground1} />
      <div className={styles.valorantBackground2} />
      <div className={styles.valorantBackground3} />
      <header className={styles.headerContainer}>
        <img src={Image1} alt="logo" className={styles.imgContainer} />
        <h1 className={styles.titleName}>Riot Games</h1>
        <img src={Image2} alt="logo" className={styles.imgContainer} />
      </header>

      <div className={styles.childrenContainer}>{props.children}</div>

      <div className={styles.footerContainer}>
        <img src={FacebookLogo} alt="logo" className={styles.imgContainer} />
        <img src={TwitterLogo} alt="logo" className={styles.imgContainer} />
        <img src={InstagramLogo} alt="logo" className={styles.imgContainer} />
      </div>
    </div>
  );
};

export default Layout;
