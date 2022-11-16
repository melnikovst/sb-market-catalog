import styles from './CardFullfied.module.scss';
import { ICard } from '../../../@types/handlers';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

interface stateObj {
  img: string;
  price: number;
  desc: string;
}

const CardFullfied: React.FC<ICard> = () => {
  const { id } = useParams();
  const [card, setCard] = useState<stateObj>();
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleLeft = () => {
    slideIndex <= 0 ? setSlideIndex(list.length - 1) : setSlideIndex(slideIndex => slideIndex - 1);
  };
  
  const handleRight = () => {
    slideIndex >= list.length - 1 ? setSlideIndex(0) : setSlideIndex(slideIndex => slideIndex + 1);
  }

  useEffect(() => {
    const fetchCards = async () => {
      const predata = await fetch(
        `https://636d6ba391576e19e3281300.mockapi.io/cards/${id}`
      );
      const data = await predata.json();
      setCard(data);
    };
    fetchCards();
  }, []);
  if (!card) {
    return <p>Грузится....</p>;
  }
  const list = Object.values(card).slice(1, 5)

  
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.slider}>
          <div className={styles.list} style={{ transform: `translateX(-${slideIndex * 385}px)` }}>
            {Object.values(card)
                   .slice(1, 5)
                   .map((item, index) => <img key={index} className={styles.image} src={item} alt="" />)}
          </div>
          <button className={styles.left_btn} onClick={() => handleLeft()}/>
          <button className={styles.right_btn} onClick={() => handleRight()}/>
        </div>
        <h4 className={styles.desc_title}>Описание товара:</h4>
        <p className={styles.description}>{card.desc}</p>
        <h4 className={styles.desc_title}>Об уходе:</h4>
        <p className={styles.caring}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis
          veniam nobis explicabo quidem incidunt error laborum, tempore vero in.
          Doloremque accusamus ab commodi hic voluptatum incidunt! Nemo,
          explicabo vitae.
        </p>
      </div>
    </div>
  );
};

export default CardFullfied;
