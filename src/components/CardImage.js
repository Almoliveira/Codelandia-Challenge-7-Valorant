import styles from "./CardImage.module.css";
import OmenSVG from "../assets/svg/omen.svg";
import SageSVG from "../assets/svg/sage.svg";
import SovaSVG from "../assets/svg/sova.svg";

const CardImage = (props) => {
  const character = props.character;

  var svg = "";

  switch (character) {
    case "omen":
      svg = OmenSVG;
      break;

    case "sage":
      svg = SageSVG;
      break;

    case "sova":
      svg = SovaSVG;
      break;

    default:
      svg = null;
      break;
  }

  const callBackFunction = () => {
    props.callFunction(props.character);
  }

  return (
    <div className={styles.cardBackground} onClick={callBackFunction}>
      <div className={styles.cardContainer}>
        <img src={svg} alt="teste" className={styles.imageContainer}/>
       
      </div>
    </div>
  );
};

export default CardImage;
