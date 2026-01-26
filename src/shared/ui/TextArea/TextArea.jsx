import { forwardRef, useState } from "react";
import { Stack } from "../Stack/Stack";
import styles from "./TextArea.module.scss";
import { getStyles } from "../../lib";

export const TextArea = forwardRef(({
    label,
    register, 
    className,
    error,
    ...otherProps
    }, ref) => {
        
        const [charCount, setCharCount] = useState(0);

        const handleInput = (e) => {
            setCharCount(e.target.value.length);
        };

        const mode = {
            [styles.error]: !!error
        };

        return (
          <Stack direction="column" gap="8" max>
            <label className={styles.label}>
                {label}
            <textarea
               ref={ref}
               {...register}
               {...otherProps}
               className={getStyles(styles.textarea, mode, [className])}
               onInput={handleInput}
            />    
         </label>

         <div className={styles.fieldMeta}>
            {error && (
                <span className={styles.errorMessage}>
                     {error.message}
                </span>
            )}

            {otherProps.maxLength && (
                 <span className={styles.charCounter}>
                    {charCount} / {otherProps.maxLength}
                 </span>
            )}
            </div>

        </Stack>
        );
    });