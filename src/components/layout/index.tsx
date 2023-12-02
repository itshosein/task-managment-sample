import { FC } from "react"
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";


const RootLayout: FC = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}

export default RootLayout;