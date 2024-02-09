"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./navbar.module.css";
import {
  MdBedtime,
  MdNotifications,
  MdPublic,
  MdSearch,
  MdSunny,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [isBedtime, setIsBedtime] = useState(true);

  const toggleMode = () => {
    setIsBedtime(!isBedtime);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Buscar..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          {isBedtime ? <MdBedtime size={20} onClick={toggleMode} /> : <MdSunny size={20} onClick={toggleMode} />}
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
