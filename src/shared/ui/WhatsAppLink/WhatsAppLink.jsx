import { useTranslation } from "react-i18next";
import { Stack } from "@/shared/ui/Stack";
import { WhatsAppIcon } from "@/shared/assets/svg/WhatsAppIcon";
import { Link } from "@/shared/ui/Link";
import styles from "./WhatsAppLink.module.scss";

export const WhatsAppLink = ({ phone }) => {

  const { t } = useTranslation();

  const message = encodeURIComponent(
    "Hi, I'm interested in your interior design services. Can we discuss more details?"
  );

  const waHref = `https://wa.me/${phone?.replace(/[^\d]/g, "")}?text=${message}`;

  return (
    <Stack gap="24" align="center">
      <WhatsAppIcon />
      <Link
        className={styles.whatsAppLink}
        href={waHref}
        external 
        ariaLabel={t("WhatsApp Message")}
      >

        {t("CTA Link")}
      
      </Link>
    </Stack>
  );
}