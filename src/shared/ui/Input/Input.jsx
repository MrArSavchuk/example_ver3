import { forwardRef, useId } from "react";
import { getStyles } from "../../lib/getStyle/getStyle";
import styles from "./Input.module.scss";

export const Input = forwardRef(({
    className,
    label,
    error,
    register,
    disabled,
    ariaLabel,
    ...otherProps
}, ref) => {

    const id = useId();

    const mode = {
        [styles.errorState]: Boolean(error),
    };

    const additional = [
        className
    ];

    const setRefs = (node) => {
        if (register?.ref) register.ref(node);

        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
    };

    return (
        <div className={getStyles(styles.wrapper, mode, additional)}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={setRefs}
                className={styles.input}
                disabled={disabled}
                aria-label={ariaLabel}
                {...register}
                {...otherProps}
            />

            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
});