import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Stack } from "@/shared/ui/Stack";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsDesktopSlider.module.scss";

export const ReviewsDesktopSlider = ({ reviews, previousLabel, nextLabel }) => {
  const [page, setPage] = useState(0);

  if (!reviews.length) return null;

  const isFirst = page === 0;
  const isLast = page === reviews.length - 1;

  const handlePrev = () => {
    if (isFirst) return;
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (isLast) return;
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Stack direction="column" gap="24" className={styles.desktopOnly}>
      <div className={styles.viewportWrap}>
        <button
          type="button"
          aria-label={previousLabel}
          className={styles.iconButton}
          onClick={handlePrev}
          disabled={isFirst}
        >
          <ChevronLeft strokeWidth={1} size={40} />
        </button>

        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${page * 100}%)` }}>
            {reviews.map((review) => (
              <article key={review._id} className={styles.slide}>
                <ReviewsCard review={review} />
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={nextLabel}
          className={styles.iconButton}
          onClick={handleNext}
          disabled={isLast}
        >
          <ChevronRight strokeWidth={1} size={40} />
        </button>
      </div>

      <div className={styles.indicators} aria-hidden="true">
        {reviews.map((_, index) => (
          <span key={index} className={index === page ? styles.indicatorActive : styles.indicator} />
        ))}
      </div>
    </Stack>
  );
};
