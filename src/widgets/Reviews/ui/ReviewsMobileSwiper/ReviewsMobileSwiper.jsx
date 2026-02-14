import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Stack } from "@/shared/ui/Stack";
import { Pagination } from "@/shared/ui/Pagination";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import styles from "./ReviewsMobileSwiper.module.scss";

export const ReviewsMobileSwiper = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  if (!reviews.length) return null;

  const showControls = reviews.length > 1;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePageChange = (selected) => {
    swiperRef.current?.slideTo(selected);
  };

  return (
    <Stack direction="column" gap="16" className={styles.mobileOnly}>
      <Swiper
        modules={[SwiperPagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={12}
        allowTouchMove
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className={styles.swiperViewport}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className={styles.slide}>
            <ReviewsCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showControls ? (
        <Stack justify="center">
          <Pagination totalItems={reviews.length} itemsPerPage={1} selectedPage={activeIndex} onPageChange={handlePageChange} />
        </Stack>
      ) : null}
    </Stack>
  );
};
