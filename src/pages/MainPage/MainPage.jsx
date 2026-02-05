import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"
import { ServicesSection } from "@/widgets/Services/ui"
import { Contacts } from "@/widgets/contacts"


const MainPage = () => {
  const { t } = useTranslation()
  return (
    <Stack
      direction="column"
      align="center"
      gap="16"
    >
      <h1>Olesya Martin</h1>
      <p>{t('Interior Designer')}</p>
      <ServicesSection />
      <Contacts />
    </Stack>
  )
}

export default MainPage;