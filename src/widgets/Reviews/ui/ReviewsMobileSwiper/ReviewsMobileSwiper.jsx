import { useRef, useState } from "react";
import { Stack } from "@/shared/ui/Stack";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsMobileSwiper.module.scss";

const SWIPE_THRESHOLD = 40;

export const ReviewsMobileSwiper = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  if (!reviews.length) return null;

  const shouldEnableControls = reviews.length > 1;

  const next = () => {
    if (!shouldEnableControls) return;

    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    if (!shouldEnableControls) return;

    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      return;
    }

    if (distance > 0) {
      next();
      return;
    }

    prev();
  };

  return (
    <Stack direction="column" gap="16" className={styles.mobileOnly}>
      <div className={styles.viewport} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className={styles.track} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {reviews.map((review) => (
            <article key={review._id} className={styles.slide}>
              <ReviewsCard review={review} />
            </article>
          ))}
        </div>
      </div>

      <div className={styles.indicators}>
        {reviews.map((review, index) => (
          <button
            key={review._id || index}
            type="button"
            aria-label={`${index + 1}`}
            className={index === activeIndex ? styles.indicatorActive : styles.indicator}
            onClick={() => setActiveIndex(index)}
            disabled={!shouldEnableControls}
          />
        ))}
      </div>
    </Stack>
  );
};
