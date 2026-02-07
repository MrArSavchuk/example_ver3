import { TypographyV2 } from "../Typography";
import styles from "./Number.module.scss";
import { getStyles } from "../../lib";

export const Number = ({ index }) => {
    const value = index < 10 ? `0${index}` : index;

    return (
        <div className={styles.numberContainer}>
            <TypographyV2 
            as="span"
            tabularNumbers
            className={styles.number}
            >
                {value}
            </TypographyV2>
            <TypographyV2
            as="span"
            className={getStyles(styles.number, {}, [styles.numberDot])}
            >
            .
            </TypographyV2>    
        </div>
    )
}