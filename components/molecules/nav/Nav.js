import { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Link from "next/dist/client/link";
import classes from "./Nav.module.scss";

export default function Nav({ contentModule }) {
  const [isActive, setIsActive] = useState();
  const handleToggle = () => setIsActive(!isActive);

  const { linkList } = contentModule;

  return (
    <nav className={classes.navMain}>
      <div id={`top`}></div>
      <span onClick={handleToggle} className={classes.burgerWrapper}>
        <BurgerMenu />
      </span>
      <div
        className={`${classes.mNavMobile} ${
          isActive ? `${classes.navOpen}` : `${classes.navClosed}`
        }`}
      >
        <div onClick={handleToggle} className={classes.mNavBurger}>
          <BurgerMenu handleToggle={handleToggle} isActive={isActive} />
        </div>

        <ul className={classes.mMenu}>
          {linkList.map((item, index) => (
            <li key={index} className={classes.navLink} onClick={handleToggle}>
              <Link href={item.fields.linkUrl}>
                <a
                  className={classes.aLink}
                  target={`${item.fields.isExternal ? "_blank" : "_parent"}`}
                >
                  {item.fields.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
