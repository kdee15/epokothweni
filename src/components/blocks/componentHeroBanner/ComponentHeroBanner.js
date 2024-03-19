import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classes from "./ComponentHeroBanner.module.scss";

function ComponentHeroBanner({ heroBanner }) {
  const logoImage = useRef(null);
  const refBackground = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline.to(logoImage.current, { height: "200px", opacity: "0" }, 0);
    timeline.to(refBackground.current, { opacity: "0" }, 0);
  }, []);

  const { description, image, logo, theme } = heroBanner;
  return (
    <section className={`${classes.oHeroBlock} hero__${theme}`}>
      <div
        ref={refBackground}
        className={`${classes.aBackgroundBlock}`}
        style={{
          backgroundImage: `url(http:${image?.fields?.file?.url})`,
        }}
      ></div>
      <div className={`container`}>
        <div className={`${classes.oContentRow} row`}>
          <div className={`${classes.oContentBlock} col-12`}>
            <figure className={classes.mImage}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo.fields.file.url}
                alt={`title`}
                width={logo.fields.file.details.image.width}
                height={logo.fields.file.details.image.height}
                aria-hidden="true"
                style={{ objectFit: "contain" }}
                priority="true"
                ref={logoImage}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentHeroBanner;
