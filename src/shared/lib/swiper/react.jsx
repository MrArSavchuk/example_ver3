import { Children, cloneElement, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from "react";

const SWIPE_THRESHOLD = 40;

export const SwiperSlide = ({ children, style, className = "" }) => {
  return (
    <div className={`swiper-slide ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

export const Swiper = ({
  children,
  className = "",
  slidesPerView = 1,
  slidesPerGroup = 1,
  spaceBetween = 0,
  onSlideChange,
  onSwiper,
  navigation,
  allowTouchMove = true,
}) => {
  const slides = useMemo(() => Children.toArray(children).filter(isValidElement), [children]);
  const maxIndex = Math.max(0, slides.length - slidesPerView);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const slideTo = useCallback(
    (index) => {
      setActiveIndex((prev) => {
        const bounded = Math.min(Math.max(index, 0), maxIndex);
        return bounded === prev ? prev : bounded;
      });
    },
    [maxIndex],
  );

  const slideNext = useCallback(() => {
    slideTo(activeIndex + slidesPerGroup);
  }, [activeIndex, slideTo, slidesPerGroup]);

  const slidePrev = useCallback(() => {
    slideTo(activeIndex - slidesPerGroup);
  }, [activeIndex, slideTo, slidesPerGroup]);

  const apiRef = useRef({
    slideTo,
    slideNext,
    slidePrev,
    get activeIndex() {
      return activeIndex;
    },
  });

  useEffect(() => {
    apiRef.current = {
      slideTo,
      slideNext,
      slidePrev,
      get activeIndex() {
        return activeIndex;
      },
    };

    onSwiper?.(apiRef.current);
  }, [activeIndex, onSwiper, slideNext, slidePrev, slideTo]);

  useEffect(() => {
    onSlideChange?.({ activeIndex });
  }, [activeIndex, onSlideChange]);

  useEffect(() => {
    const prevEl = navigation?.prevEl?.current ?? navigation?.prevEl;
    const nextEl = navigation?.nextEl?.current ?? navigation?.nextEl;

    const onPrev = () => slidePrev();
    const onNext = () => slideNext();

    prevEl?.addEventListener("click", onPrev);
    nextEl?.addEventListener("click", onNext);

    return () => {
      prevEl?.removeEventListener("click", onPrev);
      nextEl?.removeEventListener("click", onNext);
    };
  }, [navigation, slideNext, slidePrev]);

  const handleTouchStart = (event) => {
    if (!allowTouchMove) return;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (!allowTouchMove) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;

    if (distance > 0) {
      slideNext();
      return;
    }

    slidePrev();
  };

  const slideWidth = `calc((100% - ${(slidesPerView - 1) * spaceBetween}px) / ${slidesPerView})`;

  return (
    <div className={`swiper ${className}`.trim()} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="swiper-wrapper" style={{ transform: `translateX(-${activeIndex * (100 / slidesPerView)}%)`, gap: `${spaceBetween}px` }}>
        {slides.map((slide, index) =>
          cloneElement(slide, {
            key: slide.key || index,
            style: {
              ...(slide.props.style || {}),
              width: slideWidth,
              minWidth: slideWidth,
              flex: "0 0 auto",
            },
          }),
        )}
      </div>
    </div>
  );
};
