import { getStyles } from "../../lib";
import styles from "./Typography.module.scss";

export const Typography = ({
    type = "p", // "h1","h2","h3","p","span", "li"
    children,
    size = "m", // m | s | xs (ТОЛЬКО для p / span)
    weight = "normal", //"bold"
    font = "lato", // "poiretOne"
    className,
    ...otherProps
}) => {

  const TextTag = type;

  const isTextWithSize = type === "p" || type === "span";

  const additional = [
    styles[type],
    isTextWithSize && styles[size],
    styles[weight],
    styles[font],
    className,
  ];

  return (
    <TextTag className={getStyles(styles.text, {}, additional)}
    {...otherProps}
    >
      {children}
    </TextTag>
  );
}