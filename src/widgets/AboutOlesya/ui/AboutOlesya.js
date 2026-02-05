import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { TextArea } from "@shared/ui/TextArea";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Quotation } from "@/shared/assets/svg/Quotation";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { Skeleton } from "@/shared/ui/Skeleton";
import style from "./AboutOlesya.module.scss";

// https://interior-designer-backend-k9ub.onrender.com/api/about?lang=en

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
                    <Stack direction="column" className={style.textPadding} gap={8}>
                    {description?.text
                        ?.split("\n")
                        .map((paragraph, index) => (

                        <Text lang={i18n.language} key={index} mb={4}>
                            {paragraph}
                        </Text>
                    ))}
                    </Stack>

                    <div className={style.quoteContainer} data-aos="fade-left">
                        <Stack direction="column" gap="24">
                            <Quotation/>
                            <Text font="poiretOne" size="md">
                                {t("Quote")}
                            </Text>
                        </Stack>
                    </div>
                </Stack>
            }
        </section>
    );
}