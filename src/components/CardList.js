import CardImage from "./CardImage";
import styles from "./CardList.module.css";

const CardList = (props) => {

  const RenderCallBack = (value) => {
    props.callFunction(value);
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.logoName}>VALORANT</h1>
      <div className={styles.flexContainer}>
        {props.lista.map((item, index) => {
          return (
            <div key={index} >
              <CardImage character={item} callFunction={RenderCallBack} />
              <h1 className={styles.characterName} >{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
