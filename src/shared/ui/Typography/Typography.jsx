import { getStyles } from "../../lib";
import styles from "./Typography.module.scss";

export const Typography = ({
    type = "p", // "h1","h2","h3","p","li","span"
    children,
    size = "xs", // "s","md","m","l","xl","xxl"
    weight = "normal", //"bold"
    font = "lato", // "poiretOne"
    className,
    ...otherProps
}) => {

  const mapTextTag = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    li: "li",
    span: "span",
  };

  const TextTag = mapTextTag[type];

  const additional = [
    styles[size],
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
