import { forwardRef } from "react";
import styles from "./Link.module.scss";
import { getStyles } from "@/shared/lib";

export const Link = forwardRef(({
  children,
  className,
  href = "#",
  external = false,
  ariaLabel,
  ...otherProps
}, ref) => {

  const additional = [
    className
  ]

  return (
    <a
      ref={ref}
      className={getStyles(styles.link, {}, additional)}
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