import { useTranslation } from "react-i18next";
import { ServicesItem } from "../ServiceItem/ServicesItem";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./ServicesSection.module.scss";
import { useEffect, useState } from "react";
import { servicesApi } from "@/features/ManageServices/api/servicesApi";
import { TypographyV2 } from "@/shared/ui/Typography";


export const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  const [packages, setPackages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const lang = i18n.language;
      const data = await servicesApi(lang);
      setPackages(data);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [i18n.language]);

  return (
    <Stack tag="section" id="services-and-prices"
      direction="column" gap="32"
      className={styles.services}
    >
      <Stack direction="column" gap="16">
        <TypographyV2
          variant="h2"
          className={styles.headingStyle}
        >
          {t("Services")}
        </TypographyV2>
        <TypographyV2 className={styles.textStyle}>
          {t("ServiceText")}
        </TypographyV2>
      </Stack>
      <Stack
        direction="column" gap="24" max
        className={styles.servicesItem}
      >
        {isLoading ?
          (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} height="10vh" />
            ))

          ) :
          error ? (
            <TypographyV2 color="error">
              {t("Error loading services")}: {error}
            </TypographyV2>
          )
            :
            packages?.services?.map(item => (
              <ServicesItem
                key={item._id}
                item={item}
                value={packages?.favorite?.value}
                defaultOpen={item._id === "1"}
                isLoading={isLoading}
              />
            ))}
      </Stack>
      <Stack
        direction="column"
        align="center"
        className={styles.container}
        gap="8"
      >
        <TypographyV2>
          {t("CTA Section Text")}
        </TypographyV2>
        {/* <WAButton phone={contacts?.phone}/> */}
      </Stack>
    </Stack>
  )
}
