import { getStyles } from "../../lib";
import styles from "./TypographyV2.module.scss";

const DEFAULT_TAG_BY_VARIANT = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body16: "p",
    body14: "p",
    body12: "p",
};

export const TypographyV2 = ({
    variant = "body16", // h1 | h2 | h3 | body16 | body14 | body12
    children,
    as,               // переопределить тег (например для span или li)
    weight = "normal", // normal | bold
    font = "lato",     // lato | poiretOne
    tabularNumbers, // boolean - использовать табличные цифры
    noMargin = true, // boolean - убрать margin
    className,
    ...otherProps
}) => {
    const TextTag = as || DEFAULT_TAG_BY_VARIANT[variant] || "p";

    const mode = {
        [styles.tabularNumbers]: tabularNumbers,
        [styles.noMargin]: noMargin
    };

    const additional = [
        styles[variant],
        styles[weight],
        styles[font],
        className,
    ];

    return (
        <TextTag
            className={getStyles("", mode, additional)}
            {...otherProps}
        >
            {children}
        </TextTag>
    );
};
