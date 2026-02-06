import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography"; 
import { Number } from "@/shared/ui/Number";
import { Line } from "@/shared/ui/Line";
import { steps } from "../lib/data";
import processImg from "@/shared/assets/images/process.webp";
import styles from "./Process.module.scss";;

export const Process = () => {
    const { t, i18n } = useTranslation();

    return (
        <Stack tag="section" id="how-it-works" 
            direction="column" gap="32"
            className={styles.sectionProcess} 
        >
            <Stack direction="column" gap="16">
                <Typography 
                    type="h2" 
                    
                    weight="bold"
                    className={styles.headingStyle}
                >
                    {t("HowItWorks")} 
                </Typography>
                <Typography 
                    className={styles.textStyle}
                    type="p" 
                    
                    >
                    {t("How It Works Text")} 
                </Typography>
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
                                <Typography 
                                    type="h3"
                                    weight="bold"
                                >
                                    {t(title)} 
                                </Typography>
                                <Typography 
                                    type="p" 
                                    lang={i18n.language} 
                                    className={styles.textProccess}
                                >
                                    {t(text)} 
                                </Typography>
                            </Stack>
                        </Stack>)}
                </Stack>
            </Stack>
        </Stack>
    );
}
