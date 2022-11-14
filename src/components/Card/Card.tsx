import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import { ICard } from '../../@types/handlers';

const Card: React.FC<ICard> = ({ id, img, desc, price }) => {
  return (
    <div className={styles.card}>
      <Link to={`/catalog/${id}`}>
        <img src={img} alt="nazvanie" className={styles.image} />
      </Link>
      <p className={styles.description}>{desc}</p>
      <p className={styles.price}>{price}&#x20bd;</p>
    </div>
  );
};

export default Card;
