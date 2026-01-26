import logo from "@/shared/assets/images/logo.webp";
import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.loader}>
      <img
        src={logo}
        className={style.logo}
        alt="Logo Olesya Martin design interior"
      />
    </div>
  );
};
