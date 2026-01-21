import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = async (lang) => {
    if (lang !== currentLang) {
      await i18n.changeLanguage(lang);
    }
  };

  return (
      <>
        <Button 
          variant = "secondary"
          active = {currentLang === "en"}
          onClick = {() => changeLanguage("en")} 
          ariaLabel = "Lang Switcher to English"
        >
          EN
        </Button>
        <Button 
          variant = "secondary"
          active = {currentLang === "ru"}
          onClick = {() => changeLanguage("ru")} 
          ariaLabel = "Lang Switcher to Russian"
        >
          RU
        </Button>
      </>
  );
};