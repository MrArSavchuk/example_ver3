import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"
import { Contacts } from "@/widgets/contacts"
import { ServicesSection } from "@/widgets/Services/ui"
import { Process } from "../../widgets/Process/ui/Process"


const MainPage = () => {
   const { t } = useTranslation()
     return (
       <Stack
         direction="column"
         align="center"
         gap="16"
       >
         <ServicesSection/>
         <Process />
         <Contacts />
       </Stack>
     )
}

export default MainPage;