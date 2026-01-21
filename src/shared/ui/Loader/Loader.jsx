import { useEffect, useState } from "react";
import logo from "@/shared/assets/images/logo.webp";
import style from "./Loader.module.scss";
import { getStyles } from "@/shared/lib/getStyle/getStyle";

export const Loader = ({ isFading }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2050);
    return () => clearTimeout(timer);
  }, []);

  const className = getStyles(
    style.loader,
    {
      [style.loaded]: loaded,
      [style.fade]: isFading,
    },
    []
  );

  return (
    <div className={className}>
      <img
        src={logo}
        className={style.logo}
        alt="Logo Olesya Martin design interior"
      />
    </div>
  );
};
