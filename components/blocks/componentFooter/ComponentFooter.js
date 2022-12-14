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
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[0].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[0].fields.image.fields.file.url}
                        alt={socialLinks[0].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[1].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[1].fields.image.fields.file.url}
                        alt={socialLinks[1].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[2].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[2].fields.image.fields.file.url}
                        alt={socialLinks[2].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[3].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[3].fields.image.fields.file.url}
                        alt={socialLinks[3].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[4].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[4].fields.image.fields.file.url}
                        alt={socialLinks[4].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
              <li className={`${classes.mLinkItem} m-link-item`}>
                <Link href={socialLinks[5].fields.url}>
                  <a
                    target={`_blank`}
                    className={`${classes.mLink} m-link`}
                    rel={`noopener`}
                  >
                    <figure className={`${classes.mIcon} m-icon`}>
                      <Image
                        className={`${classes.aIcon} a-icon`}
                        src={socialLinks[5].fields.image.fields.file.url}
                        alt={socialLinks[5].fields.title}
                        width={`16px`}
                        height={`16px`}
                        layout="responsive"
                      />
                    </figure>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-2`}
          >
            <ul className={`${classes.oFooterList} oFooterMenu`}>
              <li className={`${classes.aListItem}`}>
                <Link href={menuLinks[0].fields.link}>
                  <a
                    className={`${classes.aFooterLink} a-fnt-16s`}
                    rel={`noopener`}
                  >
                    {menuLinks[0].fields.title}
                  </a>
                </Link>
              </li>
              <li className={`${classes.aListItem}`}>
                <Link href={menuLinks[1].fields.link}>
                  <a
                    className={`${classes.aFooterLink} a-fnt-16s`}
                    rel={`noopener`}
                  >
                    {menuLinks[1].fields.title}
                  </a>
                </Link>
              </li>
              {/* {menuLinks[1] != null && (
              )}
              {menuLinks[2] != null && (
                <li className={`aListItem`}>
                  <Link href={menuLinks[2].fields.link}>
                    <a className={`aFooterLink a-fnt-16s`} rel={`noopener`}>
                      {menuLinks[2].fields.title}
                    </a>
                  </Link>
                </li>
              )}
              {menuLinks[3] != null && (
                <li className={`aListItem`}>
                  <Link href={menuLinks[3].fields.link}>
                    <a className={`aFooterLink a-fnt-16s`} rel={`noopener`}>
                      {menuLinks[3].fields.title}
                    </a>
                  </Link>
                </li>
              )} */}
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
