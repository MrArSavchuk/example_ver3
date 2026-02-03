import { useWindowWidth, useOverflowHidden } from "@techlabteam/useful-hooks";
import { HashLink } from "react-router-hash-link";
import { navigation } from "../../data";
import { BurgerButton } from "./ui/BurgerButton";
import { Stack } from "@/shared/ui/Stack";
import { useTranslation } from "react-i18next";
import style from "./NavbarMobile.module.scss";
import { useToggle } from "@/shared/lib";

export const NavbarMobile = () => {
  const { t } = useTranslation();
  const { isOpen, toggle, close } = useToggle();
  const width = useWindowWidth();
  const isMobile = width <= 1024;
  useOverflowHidden(isOpen);

  return (
    <Stack
      tag="nav"
      align="center"
      className={style.navbarMobile}
      aria-label="Main Navigation"
      max
    >
      {isMobile && (
        <BurgerButton
          isOpen={isOpen}
          toggleMenu={toggle}
          className={style.burgerButton}
          ariaLabel="Toggle Navbar"
        />
      )}

      {isOpen && (
        <ul className={style.menu}>
          {Object.values(navigation).map(({ text, path }) => (
            <li key={path} onClick={close}>
              <HashLink smooth to={`#${path}`} className={style.sectionLink}>
                {t(text).toUpperCase()}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </Stack>
  );
};
