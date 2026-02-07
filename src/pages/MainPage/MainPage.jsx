import { Stack } from "@/shared/ui/Stack"
import { Contacts } from "@/widgets/contacts"
import { ServicesSection } from "@/widgets/Services/ui"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"


const MainPage = () => {
  return (
    <Stack
      direction="column"
      align="center"
      gap="16"
    >
      <Header />
      <ServicesSection />
      <Contacts />
      <Footer />
    </Stack>
  )
}

export default MainPage;