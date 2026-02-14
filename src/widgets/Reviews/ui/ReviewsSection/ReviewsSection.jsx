import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";
import { TypographyV2 } from "@/shared/ui/Typography";
import { reviewsApi } from "@/features/ManageReviews/api/reviewsApi";
import { ReviewsDesktopSlider } from "../ReviewsDesktopSlider/ReviewsDesktopSlider";
import { ReviewsMobileSwiper } from "../ReviewsMobileSwiper/ReviewsMobileSwiper";
import styles from "./ReviewsSection.module.scss";

export const ReviewsSection = () => {
  const { t, i18n } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError("");

      try {
        const data = await reviewsApi(i18n.language);
        setReviews(data);
      } catch (fetchError) {
        setError(fetchError.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [i18n.language]);

  return (
    <Stack tag="section" id="review" direction="column" gap="32" className={styles.reviewsSection}>
      <Stack direction="column" gap="16">
        <TypographyV2 variant="h2" weight="bold" className={styles.heading}>
          {t("Review")}
        </TypographyV2>

        <TypographyV2 variant="body14" className={styles.description}>
          {t("Reviews Description")}
        </TypographyV2>
      </Stack>

      {isLoading ? (
        <Stack direction="column" gap="16" className={styles.skeletonWrap}>
          <Skeleton height="220px" />
          <Skeleton height="220px" />
        </Stack>
      ) : null}

      {!isLoading && error ? <TypographyV2 className={styles.errorText}>{t("Reviews Error")}</TypographyV2> : null}

      {!isLoading && !error && reviews.length ? (
        <Stack direction="column" gap="32">
          <ReviewsMobileSwiper reviews={reviews} />

          <ReviewsDesktopSlider
            reviews={reviews}
            previousLabel={t("Reviews Prev")}
            nextLabel={t("Reviews Next")}
          />
        </Stack>
      ) : null}
    </Stack>
  );
};
