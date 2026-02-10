import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { TypographyV2 }  from "@/shared/ui/Typography/TypographyV2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Quotation } from "@/shared/assets/svg/Quotation";
// import { getImageUrl } from "@/../shared/lib/getImageUrl/getImageUrl";
import { Skeleton } from "@/shared/ui/Skeleton";
import style from "./AboutOlesya.module.scss";


export const AboutOlesya = () => {
    const { t, i18n } = useTranslation();
    const [aboutUs, setAboutUs] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { description, image } = aboutUs;

    useEffect(()=> {
        Aos.init({duration: 1500});
    }, []);

    if(error) return null;

    useEffect(()=> {
        const getAboutUs = async () => {
            try {
                setIsLoading(true);
                setError(null); 

                const response = await fetch('https://interior-designer-backend-k9ub.onrender.com/api/about?lang=${i18n.language}')

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                setAboutUs(data);

            } catch(err) {
                setError(err);
                setIsLoading(false)
            }
        };

        getAboutUs();

    }, [i18n.language])

    return (
        <section 
            id="about" 
            className={style.sectionAbout}
        >
            {isLoading ? 
                <Skeleton height="400px"/> :
                <picture className={style.picture}>
                    <img src={getImageUrl(image?.src)} alt="Olesya Martin interior designer in Atlanta" />
                </picture>
            }

            {isLoading ? 
                <Skeleton height="400px"/> :
                <Stack direction="column" gap="32">
                    <Stack direction="column" className={style.textPadding} gap={8} >
                    {description?.text
                        ?.split("\n")
                        .map((paragraph, index) => (
                            <TypographyV2 
                            key={index}
                            variant="body14"
                            lang={description.lang}
                            className={style.text}
                            >
                                {paragraph}
                            </TypographyV2>

                    ))}
                    </Stack>

                    <div className={style.quoteContainer} data-aos="fade-left">
                        <Stack direction="column" gap="24">

                            <Quotation/>

                            <TypographyV2
                            variant="body16"
                            font="poiretOne"
                            className={style.text}
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