import Sidebar from '../Sidebar/Sidebar';
import styles from './Main.module.scss';
import Card from '../Card/Card';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import all from '../../datas/all.json';
import { ICard } from '../../@types/handlers';
import { useLocation } from 'react-router-dom';

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

  const [cards, setCards] = useState<ICard[]>([]);

  const fetchData = async () => {
    try {
      const preparsedData = await fetch(
        'https://636d6ba391576e19e3281300.mockapi.io/cards'
      );
      const data = await preparsedData.json();
      setCards(data);
    } catch (error) {
      console.log('не загрузилося(' + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredFemale = cards.filter((item) => item.sizes && item);
  const filteredMale = cards.filter((item) => item.category === 1);
  const filterFemale = cards
    .filter((item) => item.sizes && item)
    .map((item, index) => <Card key={index} {...item} />);

  const filterMale = cards
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
        return filterSuits.map((item, index) => {
          console.log(item);

          return <Card key={index} {...item} />;
        });
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
