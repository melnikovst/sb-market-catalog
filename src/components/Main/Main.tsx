import Sidebar from '../Sidebar/Sidebar';
import styles from './Main.module.scss';
import sortMain from '../../images/sortMain.svg';
import Card from '../Card/Card';

type cardData = {
  img: string;
  desc: string;
  price: number;
};

const datas: cardData[] = [
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 6500,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 7777,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 9999,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 3333,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 888,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 5544,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 321,
  },
  {
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    desc: 'sometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometextsometext',
    price: 9000,
  },
];

const Main: React.FC = () => {
  return (
    <section className={styles.main}>
      <p className={styles.route}>каталог-женщины-костюмы</p>
      <p className={styles.sortType}>костюмы</p>
      <div className={styles.mainHeaderWrapper}>
        <p className={styles.counter}>{datas.length} товаров</p>
        <img src={sortMain} alt="sort" className={styles.sortImg} />
      </div>
      <div className={styles.columns}>
        <Sidebar />
        <div className={styles.mainPart}>
          <div className={styles.mainContainer}>
            {datas.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
