import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import { ICard } from '../../@types/handlers';

const Card: React.FC<ICard> = ({ id, img, desc, price }) => {
  return (
    <Link className={styles.link} to={`/catalog/${id}`}>
      <div className={styles.card}>
        <img src={img} alt="nazvanie" className={styles.image} />
        <p className={styles.description}>{desc}</p>
        <p className={styles.price}>{price}&#x20bd;</p>
      </div>
    </Link>
  );
};

export default Card;
