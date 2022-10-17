import { useState } from 'react';
import styles from './Sidebar.module.scss';

const femaleList: string[] = ['костюмы', 'топы', 'шорты'];

const maleList: string[] = ['костюмы', 'шорты', 'трусы'];

const Sidebar = () => {
  const [maleActive, setMaleActive] = useState(0);
  const [femaleActive, setFemaleActive] = useState(0);

  const [isFemaleOpen, setIsFemaleOpen] = useState(false);
  const [isMaleOpen, setIsMaleOpen] = useState(false);

  const femaleHandler = () => {
    setIsFemaleOpen(!isFemaleOpen);
    if (isMaleOpen) {
      setIsMaleOpen(false);
    }
  };

  const maleHandler = () => {
    setIsMaleOpen(!isMaleOpen);
    if (isFemaleOpen) {
      setIsFemaleOpen(false);
    }
  };

  return (
    <aside className={styles.aside}>
      <p className={styles.btn} onClick={femaleHandler}>
        женщины
      </p>
      {isFemaleOpen &&
        femaleList.map((item, i) => (
          <p
            key={i}
            className={
              femaleActive === i
                ? `${styles.listItem} ${styles.active}`
                : `${styles.listItem}`
            }
            onClick={() => setFemaleActive(i)}
          >
            {item}
          </p>
        ))}
      <p className={styles.btn} onClick={maleHandler}>
        мужчины
      </p>
      {isMaleOpen &&
        maleList.map((item, i) => (
          <p
            key={i}
            className={
              maleActive === i
                ? `${styles.listItem} ${styles.active}`
                : `${styles.listItem}`
            }
            onClick={() => setMaleActive(i)}
          >
            {item}
          </p>
        ))}
    </aside>
  );
};

export default Sidebar;
