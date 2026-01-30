import { Link } from "@/shared/ui/Link";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Contacts.module.scss";


export const Contacts = () => {
  
  const { t } = useTranslation();
  const [contacts, setContacts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchContacts();
  }, [])

  const fetchContacts = async () => {
    const url = "https://interior-designer-backend-k9ub.onrender.com/api/contacts";
    
    try {
      setIsLoading(true);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Ошибка получения данных"); // оставлю текст ошибки на русском пока, потом с RTK этого не будет
      }

      const data = await response.json();
      setContacts(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      }
    };

  if (error) {
    return (
      <section id="contacts" className={styles.sectionContacts}>
        <Typography>
          {t("Contacts Error")} 
        </Typography>
      </section>
    );
  };

  const { phone, email, facebook, instagram, image } = contacts;

  const contactItems = [
      {
          _id: "1",
          icon: <Mail strokeWidth={1.25} size={40} />,
          content: email,
          href: `mailto:${email}`,
      },
      {
          _id: "2",
          icon: <Phone strokeWidth={1.25} size={40} />,
          content: phone,
          href: `tel:${phone}`,
      },
      {
          _id: "3",
          icon: <Facebook strokeWidth={1.25} size={40} />,
          content: "Facebook",
          href: facebook,
      },
      {
          _id: "4",
          icon: <Instagram strokeWidth={1.25} size={40} />,
          content: "Instagram",
          href: instagram,
      }
  ];

  return (
    <section id="contacts" className={styles.sectionContacts}>
      <Stack direction="column" gap="40">

        <Stack direction="column" gap="24">
          <Typography type="h2" size="mobile-xl" className={styles.headingStyle}>
            {t("Contact Title")}
          </Typography>

          <Typography className={styles.textStyle}>
            {t("Contact Text")}
          </Typography>
        </Stack>

        <Stack direction="column" gap="16">
          {
            isLoading ? <Skeleton height="5vh" />
            : contactItems.map(({ _id, icon, content, href }) => (
            <Stack key={_id} gap="24" align="center">
              {icon}
              <Link href={href} ariaLabel={content}>
                {content}
              </Link>
            </Stack>
          ))}
        </Stack>

        <Stack className={styles.ctaLink} gap="24" align="center">
          {!isLoading && <WhatsAppLink phone={phone} />}
        </Stack>

      </Stack>

      {isLoading ? 
        <Skeleton height="700px"/> :        
          <picture className={styles.picture}>
              <img
              src={image?.src}
              loading="lazy"
              alt="Olesya Martin"
              />
          </picture>
      }
    </section>
  )
}