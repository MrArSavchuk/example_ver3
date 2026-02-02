import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"
import { Process } from "../../widgets/Process/ui/Process"
import { LangSwitcher } from "../../features/LangSwitcher/LangSwitcher"


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
         <LangSwitcher />
         <Process />
       </Stack>
     )
}

export default MainPage;