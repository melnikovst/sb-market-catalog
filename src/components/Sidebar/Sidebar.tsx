import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Sidebar.module.scss';
import { setBoth, setFemale, setMaleItem } from '../../redux/sortSlice';
import {
  setIsFemaleOpen,
  setMale,
  setIsMaleOpen,
  setFemaleActive,
  setMaleActive,
  setActiveF,
  setActiveM,
} from '../../redux/sortSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const femaleList: string[] = ['платья', 'топы', 'шорты'];

const maleList: string[] = ['костюмы', 'шорты', 'трусы'];

const Sidebar: React.FC = () => {
  const { isFemaleOpen, isMaleOpen, maleActive, femaleActive } = useSelector(
    (state: RootState) => state.sortSlice
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const femaleHandler = () => {
    dispatch(setIsFemaleOpen(!isFemaleOpen));
    dispatch(setMale('женщины'));
    dispatch(setActiveM(false));
    dispatch(setActiveF(true));
    !isFemaleOpen && dispatch(setFemaleActive(null));
    !isFemaleOpen && dispatch(setFemale(''));
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
      dispatch(setActiveM(false));
    }
  };

  const maleHandler = () => {
    dispatch(setIsMaleOpen(!isMaleOpen));
    dispatch(setMale('мужчины'));
    dispatch(setActiveM(true));
    dispatch(setActiveF(false));
    !isMaleOpen && dispatch(setMaleActive(null));
    !isMaleOpen && dispatch(setMaleItem(''));
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
      dispatch(setActiveF(false));
    }
  };

  useEffect(() => {
    if (!isFemaleOpen && !isMaleOpen) {
      dispatch(setActiveM(false));
      dispatch(setBoth(true));
      dispatch(setActiveF(false));
      return;
    }
    dispatch(setBoth(false));
  }, [dispatch, isFemaleOpen, isMaleOpen]);

  useEffect(() => {
    if (pathname === '/') {
      dispatch(setIsMaleOpen(false));
      dispatch(setIsFemaleOpen(false));
    }
  }, [dispatch, pathname]);

  return (
    <aside className={styles.aside}>
      <div className={styles.sticky}>
        <p className={styles.btn} onClick={femaleHandler}>
          женщины
        </p>
        <ul
          className={
            isFemaleOpen
              ? `${styles.hidden} ${styles.open}`
              : `${styles.hidden}`
          }
        >
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
        <ul
          className={
            isMaleOpen ? `${styles.hidden} ${styles.open}` : `${styles.hidden}`
          }
        >
          {maleList.map((item, i) => (
            <p
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
