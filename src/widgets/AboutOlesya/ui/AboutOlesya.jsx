import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { useState, useEffect } from "react";
import { Quotation } from "@/shared/assets/svg/Quotation";
import { Skeleton } from "@/shared/ui/Skeleton";
import style from "./AboutOlesya.module.scss";
import { TypographyV2 } from "@/shared/ui/Typography";


export const AboutOlesya = () => {
    const { t, i18n } = useTranslation();
    const [aboutUs, setAboutUs] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { image, description } = aboutUs;
    const url = "https://interior-designer-backend-k9ub.onrender.com";
    const aboutEndpoint = "/api/about";

    useEffect(() => {

        const getAboutUs = async () => {

            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(`${url}${aboutEndpoint}?lang=${i18n.language}`)

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                setAboutUs(data);

            } catch (err) {
                setError(err);

            } finally {
                setIsLoading(false);
            }
        };

        getAboutUs();

    }, [i18n.language])


    if (error) return null;

    return (
        <section id="about" className={style.sectionAbout}>

            {isLoading ?
                <Skeleton height="400px" /> :
                <picture className={style.picture}>
                    <img src={`${url}/${image?.src}`} alt="Olesya Martin interior designer in Atlanta" />
                </picture>
            }

            {isLoading ?
                <Skeleton height="400px" /> :

                <Stack direction="column" gap={32}>
                    <Stack direction="column" className={style.textPadding} gap={8}>
                        {description?.text
                            ?.split("\n")
                            .map((paragraph, index) => {

                                return (

                                    <TypographyV2
                                        key={index}
                                        variant="body14"
                                        className={style.text}
                                        noMargin={true}
                                        lang={i18n.language}
                                    >
                                        {paragraph}

                                    </TypographyV2>

                                );
                            })}
                    </Stack>


                    <div className={style.quoteContainer}>
                        <Stack direction="column" gap={24}>

                            <Quotation />

                            <TypographyV2
                                font="poiretOne"
                                lang={i18n.language}
                                className={style.quoteText}
                            >
                                {t("Quote")}
                            </TypographyV2>
                        </Stack>
                    </div>
                </Stack>
            }
        </section>
    );
}