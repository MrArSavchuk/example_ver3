import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"
import { Contacts } from "@/widgets/contacts"
import { ServicesSection } from "@/widgets/Services/ui"
import { LangSwitcher } from  "../../features/LangSwitcher"


const MainPage = () => {
   const { t } = useTranslation()
     return (
       <Stack
         direction="column"
         align="center"
         gap="16"
       >
        <LangSwitcher />
        <ServicesSection/>
        <Contacts />
       </Stack>
     )
}

export default MainPage;