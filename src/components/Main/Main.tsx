import Sidebar from '../Sidebar/Sidebar';
import styles from './Main.module.scss';
import sortMain from '../../images/sortMain.svg';
import Card from '../Card/Card';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import all from '../../datas/all.json';

const Main: React.FC = () => {
  const {
    male,
    female,
    maleItem,
    isFemaleOpen,
    isMaleOpen,
    maleActive,
    femaleActive,
  } = useSelector((state: RootState) => state.sortSlice);

  const preFilteredArray = all.map((item, index) => (
    <Card key={index} {...item} />
  ));

  const filteredFemale = all.filter((item) => item.sizes && item);
  const filteredMale = all.filter((item) => item.category === 1);
  const filterFemale = all
    .filter((item) => item.sizes && item)
    .map((item, index) => <Card key={index} {...item} />);

  const filterMale = all
    .filter((item) => item.category === 1 && item)
    .map((item, index) => <Card key={index} {...item} />);

  const filterDress = filteredFemale.filter((item) => item.sort === 4);
  const filterTops = filteredFemale.filter((item) => item.sort === 5);
  const filterShorts = filteredFemale.filter((item) => item.sort === 6);

  const filterPants = filteredMale.filter((item) => item.sort === 2);
  const filterSuits = filteredMale.filter((item) => item.sort === 1);
  const filterTrusi = filteredMale.filter((item) => item.sort === 3);

  const handleFilters = () => {
    if (!isMaleOpen && !isFemaleOpen) {
      return preFilteredArray;
    }
    if (isMaleOpen) {
      if (maleActive === 0) {
        return filterSuits.map((item, index) => <Card key={index} {...item} />);
      }
      if (maleActive === 1) {
        return filterPants.map((item, index) => <Card key={index} {...item} />);
      }
      if (maleActive === 2) {
        return filterTrusi.map((item, index) => <Card key={index} {...item} />);
      }
      return filterMale;
    }
    if (isFemaleOpen) {
      if (femaleActive === 0) {
        return filterDress.map((item, index) => <Card key={index} {...item} />);
      }
      if (femaleActive === 1) {
        return filterTops.map((item, index) => <Card key={index} {...item} />);
      }
      if (femaleActive === 2) {
        return filterShorts.map((item, index) => (
          <Card key={index} {...item} />
        ));
      }
      return filterFemale;
    }
  };

  const handleLength = () => {
    if (!isMaleOpen && !isFemaleOpen) {
      return all.length;
    }
    if (isMaleOpen) {
      if (maleActive === 0) {
        return filterSuits.length;
      }
      if (maleActive === 1) {
        return filterPants.length;
      }
      if (maleActive === 2) {
        return filterTrusi.length;
      }
      return filteredMale.length;
    }
    if (isFemaleOpen) {
      if (femaleActive === 0) {
        return filterDress.length;
      }
      if (femaleActive === 1) {
        return filterTops.length;
      }
      if (femaleActive === 2) {
        return filterShorts.length;
      }
      return filteredFemale.length;
    }
  };

  const handler = useCallback(() => {
    if (isMaleOpen) {
      return maleItem;
    }
    if (isFemaleOpen) {
      return female;
    }
  }, [female, isFemaleOpen, isMaleOpen, maleItem]);

  useEffect(() => {
    handler();
  }, [female, maleItem, handler]);
  console.log(maleItem);

  return (
    <section className={styles.main}>
      <p className={styles.route}>
        каталог{isMaleOpen || isFemaleOpen ? `-${male}-` : ''}
        {(maleItem !== null || undefined) && handler()}
      </p>
      <p className={styles.sortType}>{handler()}</p>
      <div className={styles.mainHeaderWrapper}>
        <p className={styles.counter}>{handleLength()} товаров</p>
      </div>
      <div className={styles.columns}>
        <Sidebar />
        <div className={styles.mainPart}>
          <div className={styles.mainContainer}>{handleFilters()}</div>
        </div>
      </div>
    </section>
  );
};

export default Main;
