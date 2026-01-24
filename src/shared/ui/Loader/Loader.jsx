import logo from "@/shared/assets/images/logo.webp";
import style from "./Loader.module.scss";
import { getStyles } from "../../lib/getStyle/getStyle";


export const Loader = ({ isLoading, isFading }) => {
  if (!isLoading) return null;

  const className = getStyles(
    style.loader,
    {
      [style.fade]: isFading,
    },
    []
  );

  return (
    <div className={className}>
      <img src={logo} className={style.logo} alt="Logo Olesya Martin design interior" />
    </div>
  );
};
