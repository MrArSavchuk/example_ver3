import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { Number } from "@/shared/ui/Number";
import { Line } from "@/shared/ui/Line";
import { steps } from "../lib/data";
import processImg from "@/shared/assets/images/process.webp";
import styles from "./Process.module.scss";
import { TypographyV2 } from "@/shared/ui/Typography";
;

export const Process = () => {
    const { t, i18n } = useTranslation();

    return (
        <Stack tag="section" id="how-it-works" 
            direction="column" gap="32"
            className={styles.sectionProcess} 
        >
            <Stack direction="column" gap="16">
                <TypographyV2 
                    variant="h2" 
                    weight="bold"
                    className={styles.headingStyle}
                >
                    {t("HowItWorks")} 
                </TypographyV2>
                <TypographyV2 
                    variant="body16" 
                    className={`${styles.textStyle} ${styles.textWithHyphens}`}
                    >
                    {t("How It Works Text")} 
                </TypographyV2>
            </Stack>

            <Stack 
                direction="column" gap="32" align="center"
                className={styles.container}
            >
                <picture className={styles.picture}>
                    <img src={processImg} alt="Professional custom interior design Atlanta"  />
                </picture>

                <Stack direction="column" gap="32">
                    {steps.map(({ index, title, text }, i) => 
                        <Stack key={index} gap="32">
                            <Stack direction="column" gap="32">
                                <Number index={index} />
                                {i < steps.length - 1 && <Line/>}
                            </Stack>
                            <Stack direction="column" gap="16"> 
                                <TypographyV2 
                                    variant="h3"
                                    weight="bold"
                                >
                                    {t(title)} 
                                </TypographyV2>
                                <TypographyV2
                                    variant="body16" 
                                    lang={i18n.language} 
                                    className={`${styles.textProccess} ${styles.textWithHyphens}`}
                                >
                                    {t(text)} 
                                </TypographyV2>
                            </Stack>
                        </Stack>)}
                </Stack>
            </Stack>
        </Stack>
    );
}
