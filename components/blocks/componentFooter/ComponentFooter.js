import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./ComponentFooter.module.scss";

function Footer({ footer }) {
  const { logo, qrCode, qrCodeText } = footer;
  const socialLinks = footer.socialMediaLinks;
  const menuLinks = footer.footerMenu;

  return (
    <footer className={classes.oFooter}>
      <div className={`container`}>
        <div className={`row`}>
          <nav className={`col-12 col-md-3 footer-col-1`}>
            <figure className={classes.aFooterLogo}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo.fields.file.url}
                alt={`title`}
                width={logo.fields.file.details.image.width}
                height={logo.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
            <ul className={`${classes.oIconList} oFooterMenu`}>
              {socialLinks.map((item, index) => (
                <li key={index} className={`${classes.mLinkItem} m-link-item`}>
                  <Link href={item.fields.url}>
                    <a
                      target={`_blank`}
                      className={`${classes.mLink} m-link`}
                      rel={`noopener`}
                    >
                      <figure className={`${classes.mIcon} m-icon`}>
                        <Image
                          className={`${classes.aIcon} a-icon`}
                          src={item.fields.image.fields.file.url}
                          alt={item.fields.title}
                          width={`16px`}
                          height={`16px`}
                          layout="responsive"
                        />
                      </figure>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-2`}
          >
            <ul className={`${classes.oFooterList} oFooterMenu`}>
              {menuLinks.map((item, index) => (
                <li key={index} className={`${classes.aListItem}`}>
                  <Link href={item.fields.link}>
                    <a
                      className={`${classes.aFooterLink} a-fnt-16s`}
                      rel={`noopener`}
                    >
                      {item.fields.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`col-12 col-md-3 footer-col-3`}>
            <figure className={`${classes.mQRCode} mWhatsappQR`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={`${qrCode.fields.file.url}`}
                alt={`Whatsapp QR Code`}
                width={qrCode.fields.file.details.image.width}
                height={qrCode.fields.file.details.image.height}
              />
            </figure>
            <p className={`${classes.aFooterText} aWhatsappText a-fnt-16s`}>
              {qrCodeText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
