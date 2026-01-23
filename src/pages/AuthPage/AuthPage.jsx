import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"


const AuthPage = () => {
   const { t } = useTranslation()
     return (
       <Stack
         direction="column"
         align="center"
         gap="16"
       >
         <p>{t('Authorization Page')}</p>
       </Stack>
     )
}

export default AuthPage;