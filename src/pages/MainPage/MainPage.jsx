import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"
import { Contacts } from "@/widgets/contacts"


const MainPage = () => {
   const { t } = useTranslation()
     return (
       <Stack
         direction="column"
         align="center"
         gap="16"
       >
         <Contacts />
       </Stack>
     )
}

export default MainPage;