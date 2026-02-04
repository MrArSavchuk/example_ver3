import { forwardRef } from "react";
import styles from "./Link.module.scss";
import { getStyles } from "@/shared/lib";

export const Link = forwardRef(({
  children,
  className,
  href,
  external,
  ariaLabel,
  ...otherProps
}, ref) => {

  if (!href) {
    console.error("Link rendered without href");
    return null;
  }

  return (
    <a
      ref={ref}
      className={getStyles(styles.link, {}, [className])}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </a>
  )
});