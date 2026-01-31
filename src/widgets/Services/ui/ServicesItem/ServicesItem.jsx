import React, { memo, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Stack } from "@/shared/ui/Stack";
import desktopBadge from "@/shared/assets/images/mostPopular/most-popular-desktop.webp";
import { ChevronDown, Minus, Plus } from "lucide-react";
import styles from "./ServicesItem.module.scss";;

export const ServicesItem = memo(({ item, defaultOpen, children, value }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { _id, title, price, content} = item
  
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
    <div className={styles.accordionItem}>
      <Stack
        className={styles.titleContainer}
        justify="between" align="center"
        gap="16"
        onClick={handleIsOpen}
        aria-label="Accordion Item Button"
        tabIndex="0" role="button"
        onKeyDown={handleKeyDown}
      >
        <Stack
          gap="24"
          align="center"
        >
          <ChevronDown strokeWidth={1} size={48} 
            className={isOpen ? styles.opened : styles.closed}/>
          <Typography
            className={styles.title}
            font="poiretOne"
          >
            {title}
          </Typography>
        </Stack>

        {is3DVisionPack && (
          <>
            <img
              src={desktopBadge}
              alt="Most Popular"
              className={styles.badge}
            />
          </>
        )}

        <Stack gap="32">
          <Typography
            className={styles.desktopPrice}
            size="md" font="poiretOne"
          >
            {price} 
          </Typography>
          {children}
          {isOpen ? 
            <Minus 
              className={styles.svgMobile}
              strokeWidth={1} 
              size={32}
            /> 
              :
            <Plus 
              className={styles.svgMobile}
              strokeWidth={1} 
              size={32}
            />
          }
        </Stack>
      </Stack>

      {isOpen && (
        <Stack 
          direction="column" gap="16"
          className={styles.list}
        >
          <Typography className={styles.content}>
            {content}
          </Typography>
          <Typography
            className={styles.mobilePrice}
            size="md" font="poiretOne"
          >
            {price}
          </Typography>
        </Stack>
      )}
    </div>
  );
});