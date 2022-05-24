import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/skills",
    label: "skills",
  },
  {
    path: "/projects",
    label: "projects",
  },
  {
    path: "/contact",
    label: "contact",
  },
];

export default function NavBar() {
  const router = useRouter();
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const handleMenuOpen = () => {
    setmobilemenuopen(true);
  };
  const handleMenuClose = () => {
    setmobilemenuopen(false);
  };
  return (
    <nav className={styles.nav}>
      <div
        className={styles.logo}
        onClick={() => {
          router.push("/");
          setmobilemenuopen(false);
        }}
      >
        
      </div>
      <div className={styles.menuopen} onClick={handleMenuOpen}>
        <Image src="/menu.svg" alt="menuopen" width={29} height={29} />
      </div>
      <ul className={mobilemenuopen ? styles.navlistshow : styles.navlisthide}>
        <div className={styles.menuclose} onClick={handleMenuClose}>
          <Image src="/close.svg" alt="menuclose" width={30} height={30} />
        </div>
        {routes.map((route, index) => (
          <li className={styles.navlinks} onClick={handleMenuClose} key={index}>
            <Link href={route.path}>
              <a> {route.label} </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
