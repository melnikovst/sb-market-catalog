import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Sidebar.module.scss';
import { setFemale, setMaleItem } from '../../redux/sortSlice';
import {
  setIsFemaleOpen,
  setMale,
  setIsMaleOpen,
  setFemaleActive,
  setMaleActive,
} from '../../redux/sortSlice';

const femaleList: string[] = ['платья', 'топы', 'шорты'];

const maleList: string[] = ['костюмы', 'шорты', 'трусы'];

const Sidebar: React.FC = () => {
  const { isFemaleOpen, isMaleOpen, maleActive, femaleActive } = useSelector(
    (state: RootState) => state.sortSlice
  );
  const dispatch = useDispatch();

  const femaleHandler = () => {
    dispatch(setIsFemaleOpen(!isFemaleOpen));
    dispatch(setMale('женщины'));
    !isFemaleOpen && dispatch(setFemaleActive(null));
    !isFemaleOpen && dispatch(setFemale(''));
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
    }
  };

  const maleHandler = () => {
    dispatch(setIsMaleOpen(!isMaleOpen));
    dispatch(setMale('мужчины'));
    !isMaleOpen && dispatch(setMaleActive(null));
    !isMaleOpen && dispatch(setMaleItem(''));
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
    }
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.sticky}>
        <p className={styles.btn} onClick={femaleHandler}>
          женщины
        </p>
        <ul className={isFemaleOpen ? `${styles.hidden} ${styles.open}` : `${styles.hidden}`}>
          {femaleList.map((item, i: number | undefined) => (
            <p
                key={i}
                className={
                  femaleActive === i
                      ? `${styles.listItem} ${styles.active}`
                      : `${styles.listItem}`
                }
                onClick={() => {
                  dispatch(setFemaleActive(i));
                  dispatch(setFemale(item));
                }}
            >
              {item}
            </p>
        ))}
        </ul>
        <p className={styles.btn} onClick={maleHandler}>
          мужчины
        </p>
        <ul className={isMaleOpen ? `${styles.hidden} ${styles.open}` : `${styles.hidden}`}>
          {maleList.map((item, i) => (<p
                  key={i}
                  className={
                    maleActive === i
                        ? `${styles.listItem} ${styles.active}`
                        : `${styles.listItem}`
                  }
                  onClick={() => {
                    dispatch(setMaleActive(i));
                    dispatch(setMaleItem(item));
                  }}
              >
                {item}
              </p>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
