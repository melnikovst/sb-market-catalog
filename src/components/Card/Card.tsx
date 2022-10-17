import styles from './Card.module.scss';

type ICard = {
  img: string;
  desc: string;
  price: number;
};

const Card: React.FC<ICard> = ({ img, desc, price }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="nazvanie" className={styles.image} />
      <p className={styles.description}>{desc}</p>
      <p className={styles.price}>{price}&#x20bd;</p>
    </div>
  );
};

export default Card;
