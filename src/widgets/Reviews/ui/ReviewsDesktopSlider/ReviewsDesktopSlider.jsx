import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Stack } from "@/shared/ui/Stack";
import { Pagination } from "@/shared/ui/Pagination";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsDesktopSlider.module.scss";

const DESKTOP_PER_PAGE = 3;

export const ReviewsDesktopSlider = ({ reviews, previousLabel, nextLabel }) => {
  const [page, setPage] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const pageCount = Math.ceil(reviews.length / DESKTOP_PER_PAGE);
  const showControls = pageCount > 1;

  if (!reviews.length) return null;

  const isFirst = page === 0;
  const isLast = page === pageCount - 1;

  const handlePrev = () => {
    if (isFirst) return;
    swiperRef.current?.slideTo((page - 1) * DESKTOP_PER_PAGE);
  };

  const handleNext = () => {
    if (isLast) return;
    swiperRef.current?.slideTo((page + 1) * DESKTOP_PER_PAGE);
  };

  const handleSlideChange = (swiper) => {
    setPage(Math.floor(swiper.activeIndex / DESKTOP_PER_PAGE));
  };

  const handlePageChange = (selected) => {
    swiperRef.current?.slideTo(selected * DESKTOP_PER_PAGE);
  };

  return (
    <Stack direction="column" gap="24" className={styles.desktopOnly}>
      <div className={`${styles.viewportWrap} ${!showControls ? styles.viewportWrapFull : ""}`}>
        {showControls ? (
          <button type="button" aria-label={previousLabel} className={styles.iconButton} onClick={handlePrev} disabled={isFirst} ref={prevRef}>
            <ChevronLeft strokeWidth={1} size={40} />
          </button>
        ) : null}

        <Swiper
          modules={[Navigation]}
          slidesPerView={DESKTOP_PER_PAGE}
          slidesPerGroup={DESKTOP_PER_PAGE}
          spaceBetween={20}
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          navigation={{ prevEl: prevRef, nextEl: nextRef }}
          className={styles.swiperViewport}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className={styles.slide}>
              <ReviewsCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {showControls ? (
          <button type="button" aria-label={nextLabel} className={styles.iconButton} onClick={handleNext} disabled={isLast} ref={nextRef}>
            <ChevronRight strokeWidth={1} size={40} />
          </button>
        ) : null}
      </div>

      {showControls ? (
        <Stack justify="center">
          <Pagination totalItems={reviews.length} itemsPerPage={DESKTOP_PER_PAGE} selectedPage={page} onPageChange={handlePageChange} />
        </Stack>
      ) : null}
    </Stack>
  );
};
