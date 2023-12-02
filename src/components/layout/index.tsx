import { FC } from "react"
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Nav from "../nav";


const RootLayout: FC = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <Outlet />
    </div>
  )
}

export default RootLayout;