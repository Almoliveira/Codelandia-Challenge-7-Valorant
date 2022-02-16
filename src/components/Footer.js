import FacebookLogo from "../assets/img/facebook.png";
import TwitterLogo from "../assets/img/twitter.png";
import InstagramLogo from "../assets/img/instagram.png";


import styles from './Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img src={FacebookLogo} alt="logo" className={styles.imgContainer} />
      <img src={TwitterLogo} alt="logo" className={styles.imgContainer} />
      <img src={InstagramLogo} alt="logo" className={styles.imgContainer} />
    </div>
  );
};

export default Footer;
