import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { isMobile } from "react-device-detect";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Link from "next/dist/client/link";
import classes from "./Nav.module.scss";

export default function Nav({ contentModule, theme }) {
  const [isActive, setIsActive] = useState();
  const [mobileView, setMobileView] = useState();
  const handleToggle = () => setIsActive(!isActive);
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null);

  const { linkList } = contentModule;

  useEffect(() => {
    setMobileView(isMobile);

    const showNav = gsap
      .fromTo(
        navbarRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
        }
      )
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });
  }, []);

  return (
    <nav className={`${classes.navMain} ${classes[theme]}`} ref={navbarRef}>
      {isMobile ? (
        <>
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
                <li
                  key={index}
                  className={classes.navLink}
                  onClick={handleToggle}
                >
                  <Link
                    href={item.fields.linkUrl}
                    className={classes.aLink}
                    target={`${item.fields.isExternal ? "_blank" : "_parent"}`}
                  >
                    {item.fields.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <ul className={`${classes.mMenu} ${classes.desk}`}>
            {linkList.map((item, index) => (
              <li
                key={index}
                className={classes.navLink}
                onClick={handleToggle}
              >
                <Link
                  href={item.fields.linkUrl}
                  className={classes.aLink}
                  target={`${item.fields.isExternal ? "_blank" : "_parent"}`}
                >
                  {item.fields.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
