import { Stack } from "@/shared/ui/Stack"
import { useTranslation } from "react-i18next"


function App() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Stack
      direction="column"
      align="center"
      gap="16"
    >
      <h1>Olesya Martin</h1>
      <p>{t('Interior Designer')}</p>
    </Stack>
    
  )
}

export default App
