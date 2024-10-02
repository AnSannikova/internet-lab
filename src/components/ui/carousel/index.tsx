import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { NextButton, PrevButton } from './arrow-buttons';
import { DotButton } from './dots-buttons';
import { useDotButton } from './hooks/use-dot-button';
import { usePrevNextButtons } from './hooks/use-prev-next-buttons';
import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface CarouselProps {
  slides: ReactNode[];
  options?: EmblaOptionsType;
}

export const Carousel: FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className={styles.carousel}>
      <div className={styles.wrapper}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {slides.map((slide, index) => (
              <div className={styles.slide} key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className={styles.controls}>
        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
