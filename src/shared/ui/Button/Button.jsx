import { forwardRef } from "react";
import { getStyles } from "../../lib/getStyle/getStyle";
import styles from "./Button.module.scss";
import { Ellipsis } from "lucide-react";

export const Button = forwardRef(({
  children,
  className,
  variant = "secondary",
  size = "xs",
  isLoading = false,
  disabled,
  active = false,
  ariaLabel,
  ...otherProps
}, ref) => {

  const mode = {
    [styles.isLoading]: isLoading,
    [styles.active]: active
  }

  const additional = [
    styles[variant],
    styles[size],
    className
  ]

  const isDisabled = disabled || isLoading

  return (
    <button
      ref = {ref}
      className = {getStyles(styles.button, mode, additional)}
      disabled = {isDisabled}
      aria-label = {ariaLabel}
      {...otherProps}
    >
      
      {isLoading ? <Ellipsis className = {styles.loader}/> : children}
    
    </button>
    
  )
});