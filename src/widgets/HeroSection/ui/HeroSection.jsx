import { Stack } from "@/shared/ui/Stack";
import { TypographyV2 }  from "@/shared/ui/Typography/TypographyV2";
import { useTranslation } from "react-i18next";
import designStudio from "@/shared/assets/images/hero.webp";
import { HashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import style from "./HeroSection.module.scss";


export const HeroSection = () => {
    const { t, i18n } = useTranslation();

    useEffect(()=> {
        Aos.init();
    }, []);

    return (
        <section>
            <Stack
                id="textContainer"
                direction="column"
                className={style.containerMobile}
                gap="24"
                data-aos="fade-right"
                data-aos-duration="1500"
            >
                <TypographyV2
                variant="h1"
                font="poiretOne"
                className={style.mobileTitle}
                >
                    OM <span>D</span>esign studi<span>O</span>
                </TypographyV2>

                <TypographyV2
                variant="body14"
                lang={i18n.language}
                className={style.textAbout}
                >
                  {t("Hero Text Mobile")}
                </TypographyV2>

                <div 
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-back"
                >
                    <img
                        id="imgContainer"
                        src={designStudio}
                        loading="lazy" 
                        alt="room design"
                        className={style.image}
                    />
                </div>

                <Stack justify="center">
                    <HashLink 
                        smooth 
                        to="#portfolio"
                        className={style.buttonMobile}
                        aria-label="Navigation to Portfolio"
                    >
                        {t("See Portfolio")}
                    </HashLink>
                </Stack>
            </Stack>

            <Stack className={style.containerDesktop} gap="32">
                <Stack
                    id="textContainer"
                    direction="column"
                    justify="center"
                    gap="24"
                    data-aos="zoom-in-right"
                    data-aos-duration="1700"
                >
                    <TypographyV2
                        variant="h1"
                        font="poiretOne"
                        weight="normal"
                        className={style.desktopTitle}
                    >
                        OM <span>D</span>esign studi<span>O</span>
                    </TypographyV2>

                    <TypographyV2 variant="body14" lang={i18n.language} noMargin className={style.textAbout} >
                        {t("Hero Text")}
                    </TypographyV2>

                    <HashLink 
                        smooth 
                        to="#portfolio"
                        className={style.buttonDesktop}
                        aria-label="Navigation to Portfolio"
                    >
                        {t("See Portfolio")}
                    </HashLink>
                </Stack>

                <img
                    id="imgContainer"
                    src={designStudio}
                    loading="lazy" 
                    alt="room design"
                    className={style.image}
                    data-aos="zoom-in-left"
                    data-aos-duration="2500"
                />
            </Stack>
        </section>
    );
};