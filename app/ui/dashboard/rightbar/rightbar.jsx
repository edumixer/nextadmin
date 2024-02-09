import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🎁 Em Breve</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
          </h3>
          <span className={styles.subtitle}>Testing subtitle</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Let's go
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Em Breve</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
          </h3>
          <span className={styles.subtitle}>Testing subtitle</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBar;