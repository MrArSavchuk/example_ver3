import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";

const LANGS = [
  {
    code: "en",
    label: "EN",
  },
  {
    code: "ru",
    label: "RU",
  }
]

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
      <Stack gap="8">
        {
          LANGS.map(({code, label}) => {
            return(
              <Button 
              key = {code}
              variant = {currentLang === code ? "primary" : "secondary"}
              onClick = {() => changeLanguage(code)} 
              ariaLabel = {`Lang Switcher to ${label}`}
            >
              {label}
            </Button>
            );
          })
        }
      </Stack>
  );
};