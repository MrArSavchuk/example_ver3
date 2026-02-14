import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Stack } from "@/shared/ui/Stack";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsDesktopSlider.module.scss";

const DESKTOP_PER_PAGE = 3;

export const ReviewsDesktopSlider = ({ reviews, previousLabel, nextLabel }) => {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const chunks = [];

    for (let index = 0; index < reviews.length; index += DESKTOP_PER_PAGE) {
      chunks.push(reviews.slice(index, index + DESKTOP_PER_PAGE));
    }

    return chunks;
  }, [reviews]);

  if (!pages.length) return null;

  const shouldEnableControls = pages.length > 1;

  const handlePrev = () => {
    if (!shouldEnableControls) return;

    setPage((prevPage) => (prevPage === 0 ? pages.length - 1 : prevPage - 1));
  };

  const handleNext = () => {
    if (!shouldEnableControls) return;

    setPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));
  };

  return (
    <Stack direction="column" gap="24" className={styles.desktopOnly}>
      <Stack justify="end" gap="16" className={styles.controls}>
        <button
          type="button"
          aria-label={previousLabel}
          className={styles.iconButton}
          onClick={handlePrev}
          disabled={!shouldEnableControls}
        >
          <ChevronLeft strokeWidth={1} size={32} />
        </button>

        <button
          type="button"
          aria-label={nextLabel}
          className={styles.iconButton}
          onClick={handleNext}
          disabled={!shouldEnableControls}
        >
          <ChevronRight strokeWidth={1} size={32} />
        </button>
      </Stack>

      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${page * 100}%)` }}>
          {pages.map((items, index) => (
            <div key={index} className={styles.page}>
              {items.map((review) => (
                <article key={review._id} className={styles.cardWrapper}>
                  <ReviewsCard review={review} />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.indicators} aria-hidden="true">
        {pages.map((_, index) => (
          <span key={index} className={index === page ? styles.indicatorActive : styles.indicator} />
        ))}
      </div>
    </Stack>
  );
};
