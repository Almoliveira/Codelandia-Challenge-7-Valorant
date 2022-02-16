import styles from "./App.module.css";
import CardList from "./components/CardList";

import OmenRender from "./assets/svg/omen_render.png";
import SageRender from "./assets/svg/sage_render.png";
import SovaRender from "./assets/svg/sova_render.png";
import PhoenixRender from "./assets/svg/phoenix_render.png";

import { useState } from "react";

function App() {
  const charList = ["omen", "sage", "sova"];

  const [svg, setSvg] = useState(PhoenixRender);

  const RenderCallBack = (value) => {
    switch (value) {
      case "omen":
        setSvg(OmenRender);
        break;
      case "sage":
        setSvg(SageRender);
        break;
      case "sova":
        setSvg(SovaRender);
        break;
      default:
        setSvg(PhoenixRender);
        break;
    }
  };

  return (
    <div>
      <CardList lista={charList}  callFunction={RenderCallBack} />
      <img src={svg} alt="render" className={styles.renderImage} />
    </div>
  );
}

export default App;
