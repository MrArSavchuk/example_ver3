import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"


const AdminPanelPage= () => {
   const { t } = useTranslation()
     return (
       <Stack
         direction="column"
         align="center"
         gap="16"
       >
         <p>{t('Admin Panel')}</p>
       </Stack>
     )
}

export default AdminPanelPage;