import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';
import { setCurrentPage } from '../../redux/paginationSlice';

const Pagination = () => {
  const buttons = [1, 2, 3, 4];
  const [activeClass, setActiveClass] = useState<number>(0);
  const dispatch = useDispatch();

  const onChangePage = (num: number) => {
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(num));
  };

  return (
    <div className={styles.wrapper}>
      {buttons.map((_, i) => (
        <button
          key={i}
          className={
            activeClass === i
              ? `${styles.button} ${styles.selected}`
              : `${styles.button}`
          }
          onClick={() => {
            setActiveClass(i);
            onChangePage(i + 1);
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
