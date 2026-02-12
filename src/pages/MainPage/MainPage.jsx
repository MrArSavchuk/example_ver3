import { Stack } from "@/shared/ui/Stack"
import { Contacts } from "@/widgets/contacts"
import { ServicesSection } from "@/widgets/Services/ui"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import { Process } from "@/widgets/Process"


const MainPage = () => {
  const { t } = useTranslation()
  return (
    <Stack
      direction="column"
      align="center"
      gap="16"
    >
      <Header />
      <ServicesSection />
      <Process />
      <Contacts />
      <Footer />
    </Stack>
  )

}

export default MainPage;