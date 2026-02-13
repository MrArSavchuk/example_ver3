import { Stack } from "@/shared/ui/Stack"
import { Contacts } from "@/widgets/contacts"
import { ServicesSection } from "@/widgets/Services/ui"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import { HeroSection } from "@/widgets/HeroSection/ui/HeroSection"
import { AboutOlesya } from "@/widgets/AboutOlesya/ui/AboutOlesya"
import { Process } from "@/widgets/Process/ui/Process"


const MainPage = () => {

     return (
       <Stack
         direction="column"
         align="center"
         gap="64"
       >
         <Header />
         <HeroSection />
         <AboutOlesya />
         <ServicesSection/>
         <Process />
         <Contacts />
         <Footer />
       </Stack>
     )
}

export default MainPage;