import { Navbar, NavbarMobile } from "@/features/Navbar";
import logo from "@/shared/assets/images/logo.webp";
import { LangSwitcher } from "@/features/LangSwitcher";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useWindowWidth } from "@techlabteam/useful-hooks";
import { Stack } from "@/shared/ui/Stack";
import style from "./Header.module.scss";

export const Header = () => {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1024;

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Stack 
            tag="header" 
            align="center"
            justify="between"
            className={style.header} 
            id="header"
            {...(windowWidth > 1024 && { 
                "data-aos": "fade-down", 
                "data-aos-duration": "2300" 
            })}
        >
            <img
                src={logo} 
                alt="design studio logo Olesya Martin" 
                className={style.logo}
            />
            {isDesktop ?
            <>
                <Navbar />
                <LangSwitcher />
            </> :
            <Stack align="center" gap="32">
                <LangSwitcher />
                <NavbarMobile />
            </Stack>}
        </Stack>
    );
};
