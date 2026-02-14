import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Stack } from "@/shared/ui/Stack";
import { Pagination } from "@/shared/ui/Pagination";
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

  const showControls = pages.length > 1;
  const isFirst = page === 0;
  const isLast = page === pages.length - 1;

  const handlePrev = () => {
    if (isFirst) return;
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (isLast) return;
    setPage((prevPage) => prevPage + 1);
  };

  const handlePageChange = (selected) => {
    setPage(selected);
  };

  return (
    <Stack direction="column" gap="24" className={styles.desktopOnly}>
      <div className={`${styles.viewportWrap} ${!showControls ? styles.viewportWrapFull : ""}`}>
        {showControls ? (
          <button
            type="button"
            aria-label={previousLabel}
            className={styles.iconButton}
            onClick={handlePrev}
            disabled={isFirst}
          >
            <ChevronLeft strokeWidth={1} size={40} />
          </button>
        ) : null}

        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${page * 100}%)` }}>
            {pages.map((items, index) => (
              <div key={index} className={styles.page}>
                {items.map((review) => (
                  <article key={review._id} className={styles.slide}>
                    <ReviewsCard review={review} />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {showControls ? (
          <button
            type="button"
            aria-label={nextLabel}
            className={styles.iconButton}
            onClick={handleNext}
            disabled={isLast}
          >
            <ChevronRight strokeWidth={1} size={40} />
          </button>
        ) : null}
      </div>

      {showControls ? (
        <Stack justify="center">
          <Pagination
            totalItems={reviews.length}
            itemsPerPage={DESKTOP_PER_PAGE}
            selectedPage={page}
            onPageChange={handlePageChange}
          />
        </Stack>
      ) : null}
    </Stack>
  );
};
