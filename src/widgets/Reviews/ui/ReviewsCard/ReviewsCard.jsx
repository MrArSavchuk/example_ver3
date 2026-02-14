import { Stack } from "@/shared/ui/Stack";
import { TypographyV2 } from "@/shared/ui/Typography";
import { Quotation } from "@/shared/assets/svg/Quotation";
import styles from "./ReviewsCard.module.scss";

export const ReviewsCard = ({ review }) => {
  if (!review) return null;

  const textDisplay = review.text || "";
  const usernameDisplay = review.username || "";

  return (
    <Stack direction="column" gap="24" className={styles.card}>
      <Quotation />
      <TypographyV2 variant="body16" className={styles.text}>
        {textDisplay}
      </TypographyV2>
      <TypographyV2 weight="bold" variant="h3">
        {usernameDisplay}
      </TypographyV2>
    </Stack>
  );
};
