import { forwardRef, useState } from "react";
import { Stack } from "../Stack/Stack";
import { getStyle } from "@/shared/helper/getStyle";
import styles from "./TextArea.module.scss";

export const TextArea = forwardRef(({
    label,
    register, 
    className,
    error,
    maxLength,
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
               maxLength={maxLength}
               className={getStyle(styles.textarea, mode, [className])}
               onInput={handleInput}
            />    
         </label>

         <div className={styles.fieldMeta}>
            {error && (
                <span className={styles.errorMessage}>
                     {error.message}
                </span>
            )}

            {maxLength && (
                 <span className={styles.charCounter}>
                    {charCount} / {maxLength}
                 </span>
            )}
            </div>

        </Stack>
        );
    });