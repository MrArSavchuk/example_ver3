import { forwardRef } from "react";
import { Navbar } from "@/features/Navbar";
import logo from "@/shared/assets/images/logo.webp";
import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import style from "./Footer.module.scss";

export const Footer = forwardRef(() => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className={style.footerContainer}
        >
            <Stack
                justify="between"
                align="center"
                className={style.desktop}
            >
                <img
                    src={logo}
                    alt="design studio logo Olesya Martin"
                    className={style.logo}
                />
                <Navbar />
            </Stack>

            <Stack
                justify="center"
                align="center"
                gap="16"
                className={style.footerLinkContainer}
            >
                <div className={style.textContainer}>
                    <span className={style.textSegment}>
                        © {currentYear} {t("copyrightName")}
                    </span>
                </div>
                <Stack
                    direction="column"
                    gap="16"
                    align="center"
                    className={style.footerText}
                >
                    <p>
                        {t("websiteDesign")} - {t("Anna Suter")}
                    </p>
                    <p>
                        {t("websiteDevelopment")} - {t("AL TECH LABS LTD")}
                    </p>
                </Stack>
            </Stack>
        </footer>
    );
});
