import { useRef, useState } from "react";
import { Stack } from "@/shared/ui/Stack";
import { Pagination } from "@/shared/ui/Pagination";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsMobileSwiper.module.scss";

const SWIPE_THRESHOLD = 40;

export const ReviewsMobileSwiper = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  if (!reviews.length) return null;

  const showControls = reviews.length > 1;

  const next = () => {
    if (!showControls) return;

    setActiveIndex((prevIndex) => (prevIndex >= reviews.length - 1 ? prevIndex : prevIndex + 1));
  };

  const prev = () => {
    if (!showControls) return;

    setActiveIndex((prevIndex) => (prevIndex <= 0 ? prevIndex : prevIndex - 1));
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

  const handlePageChange = (selected) => {
    setActiveIndex(selected);
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

      {showControls ? (
        <Stack justify="center">
          <Pagination totalItems={reviews.length} itemsPerPage={1} selectedPage={activeIndex} onPageChange={handlePageChange} />
        </Stack>
      ) : null}
    </Stack>
  );
};
