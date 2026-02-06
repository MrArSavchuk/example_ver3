import { memo, useState } from "react";
import { Stack } from "@/shared/ui/Stack";
import desktopBadge from "@/shared/assets/images/most-popular.webp";
import { ChevronDown, Minus, Plus } from "lucide-react";
import styles from "./ServicesItem.module.scss";
import { TypographyV2 } from "@/shared/ui/Typography";


export const ServicesItem = memo(({ item, defaultOpen, children, value }) => {
  if (!item) return null;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { _id, title, price, content } = item;

  const titleDisplay = title || "Service name";
  const priceDisplay = price || "—";
  const contentDisplay = content || "Description is unavailable";

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const is3DVisionPack = String(_id) === String(value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleIsOpen();
    }
  };

  return (
    <div className={styles.servicesItem}>
      <Stack
        className={styles.titleContainer}
        justify="between"
        align="center"
        gap="16"
        onClick={handleIsOpen}
        aria-label="Service Item Button"
        tabIndex="0"
        role="button"
        onKeyDown={handleKeyDown}
      >
        <Stack gap="24" align="center">
          <ChevronDown
            strokeWidth={1}
            size={48}
            className={isOpen ? styles.opened : styles.closed}
          />
          <TypographyV2 className={styles.title} font="poiretOne">
            {titleDisplay}
          </TypographyV2>
        </Stack>

        {is3DVisionPack && (
          <img
            src={desktopBadge}
            alt="Most Popular"
            className={styles.badge}
          />
        )}

        <Stack gap="32">
          <TypographyV2
            className={styles.desktopPrice}
            font="poiretOne"
          >
            {priceDisplay}
          </TypographyV2>
          {children}
          {isOpen ? (
            <Minus
              className={styles.svgMobile}
              strokeWidth={1}
              size={32}
            />
          ) : (
            <Plus
              className={styles.svgMobile}
              strokeWidth={1}
              size={32}
            />
          )}
        </Stack>
      </Stack>

      {isOpen && (
        <Stack direction="column" gap="16" className={styles.list}>
          <TypographyV2 className={styles.content}>
            {contentDisplay}
          </TypographyV2>
          
          <TypographyV2
            className={styles.mobilePrice}
            font="poiretOne"
          >
            {priceDisplay}
          </TypographyV2>
        </Stack>
      )}
    </div>
  );
});

