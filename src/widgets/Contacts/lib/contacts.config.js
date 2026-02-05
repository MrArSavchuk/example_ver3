import { Facebook, Instagram, Mail, Phone } from "lucide-react";

  export const CONTACT_ITEMS = [
      {
          _id: "1",
          icon: Mail,
          getHref: (contacts) => contacts.email ? `mailto:${contacts.email}` : undefined,
          getText: (contacts) => contacts.email,
          external: false,
      },
      {
          _id: "2",
          icon: Phone,
          getHref: (contacts) => contacts.phone ? `tel:${contacts.phone}` : undefined,
          getText: (contacts) => contacts.phone,
          external: false,
      },
      {
          _id: "3",
          icon: Facebook,
          getHref: (contacts) => contacts.facebook || undefined,
          getText: () => "Facebook",
          external: true,
      },
      {
          _id: "4",
          icon: Instagram,
          getHref: (contacts) => contacts.instagram || undefined,
          getText: () => "Instagram",
          external: true,
      }
  ];