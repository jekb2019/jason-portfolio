import styles from './Carousel.module.css';
import Card from '../Card/Card';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { roundToPreviousInteger } from '../../../utils/numbers';
import CarouselButton from '../CarouselButton/CarouselButton';
import { cardsInfo } from '../../../data/cardsInfo';

export type Direction = 'left' | 'right';

const CARD_WIDTH = 280;
const CARD_HEIGHT = 370;
const CARD_GAP = 16;
const MAX_CARDS_INDEX = cardsInfo.length;

const Carousel = () => {
  const [firstCardIndex, setFirstCardIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const transformationAmount = (CARD_WIDTH + CARD_GAP) * firstCardIndex;

  const onTransition = (direction: Direction) => {
    const carouselWidth = (carouselRef.current as HTMLDivElement).offsetWidth;
    const numberOfCardsDisplayed = roundToPreviousInteger(
      carouselWidth / (CARD_WIDTH + CARD_GAP)
    );

    switch (direction) {
      case 'left':
        if (firstCardIndex > 0) {
          setFirstCardIndex((prev) => prev - 1);
        }
        break;
      case 'right':
        if (firstCardIndex + numberOfCardsDisplayed < MAX_CARDS_INDEX) {
          console.log('hi');
          setFirstCardIndex((prev) => prev + 1);
        }
        break;
      default:
        throw new Error(`unkown direction ${direction}`);
    }

    return;
  };

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <CarouselButton
        icon={faCaretLeft}
        onClick={onTransition}
        direction={'left'}
      />
      <div
        className={styles.cards}
        style={{
          gap: `${CARD_GAP}px`,
          padding: `0px ${CARD_GAP}px`,
          transform: `translateX(-${transformationAmount}px)`,
        }}
      >
        {cardsInfo.map((card, idx) => (
          <div className={styles.card} key={idx}>
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              dimensions={{
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
              }}
            />
          </div>
        ))}
      </div>
      <CarouselButton
        icon={faCaretRight}
        onClick={onTransition}
        direction={'right'}
      />
    </div>
  );
};

export default Carousel;
