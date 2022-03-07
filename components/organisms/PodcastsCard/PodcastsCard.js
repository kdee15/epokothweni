import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { baseUrl } from "../../../helpers/utils";
import classes from "./PodcastsCard.module.scss";

export function PodcastsCard({ Podcast }) {
  return (
    <div className={classes.oPodcastCard} key={Podcast.Title} >
      <figure className={classes.mCardImage}  style={{ backgroundImage: `url(${baseUrl}${Podcast.cover_image.url})`}}>
        <span></span>
      </figure>
      <div className={classes.mCardBody}>
        <div className={classes.mContentWrapper}>
          <h4 className={classes.aTitle}>
            {Podcast.Title}
          </h4>
          <ReactMarkdown className={`${classes.mText} a-fnt-16s`}>
            {Podcast.short_description}
          </ReactMarkdown>
        </div>
        <div className={classes.mCtaRegion}>
          <Link href={`/podcasts/${Podcast.slug}`}>
            <a className={`${classes.mTextIconLink} a-fnt-16s`} rel="noopener">
              <svg className={classes.aLinkIcon} preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
              <path id="aLine" d="M69.5,66.7c-0.3,0.3-0.2,0.8,0.1,1.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3c3.5-4.6,5.4-10,5.4-15.8
	c0-14.3-11.7-26-26-26c-14.3,0-26,11.7-26,26c0,5.8,1.9,11.2,5.4,15.8c0.3,0.3,0.7,0.4,1.1,0.1c0.3-0.3,0.4-0.7,0.1-1.1
	c-3.3-4.3-5-9.5-5-14.9c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5C74.5,57.2,72.8,62.4,69.5,66.7z"/>
              <path id="aLine_00000000938589367604435180000017051507034451254421_" d="M14.4,51.8c0-19.6,16-35.6,35.6-35.6s35.6,16,35.6,35.6
	c0,11.9-5.9,22.9-15.7,29.5c-0.3,0.2-0.4,0.7-0.2,1c0.2,0.3,0.7,0.4,1,0.2C81,75.6,87.1,64.1,87.1,51.8c0-20.5-16.7-37.1-37.1-37.1
	S12.9,31.3,12.9,51.8c0,12.5,6.2,24.1,16.7,31c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.5-0.1,0.6-0.3c0.2-0.3,0.1-0.8-0.2-1
	C20.3,74.9,14.4,63.8,14.4,51.8z"/>
              <path id="aLine_00000144333056483666326940000009435564384680621462_" d="M50,3.5C23.4,3.5,1.8,25.2,1.8,51.8
	c0,18.7,10.9,35.8,27.9,43.7c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.2,0.7-0.4c0.2-0.4,0-0.8-0.4-1c-16.4-7.7-27-24.3-27-42.4
	C3.3,26,24.2,5,50,5s46.7,21,46.7,46.7c0,18.1-10.6,34.7-27,42.4c-0.4,0.2-0.5,0.6-0.4,1c0.2,0.4,0.6,0.5,1,0.4
	c16.9-7.9,27.9-25.1,27.9-43.7C98.2,25.2,76.6,3.5,50,3.5z"/>
              <path id="aFill" d="M60.9,66.1H39.1c-2.8,0-5.1,2.3-5.1,5.1v25.2h32.1V71.2C66.1,68.4,63.8,66.1,60.9,66.1z"/>
              <path id="aFill_00000095319161209598667280000009562044383411979951_" d="M50,64.6c7.1,0,12.8-5.8,12.8-12.8
	C62.8,44.7,57.1,39,50,39c-7.1,0-12.8,5.8-12.8,12.8C37.2,58.9,42.9,64.6,50,64.6z"/>
            </svg>
              <span className={classes.aLinkText}>read more</span>
            </a>
          </Link>
          <Link href={`${Podcast.URL}`}>
            <a className={`${classes.mTextIconLink} a-fnt-16s`} target={`_blank`} rel="noopener">
              <svg className={classes.aLinkIcon} preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"
                   x="0px" y="0px" viewBox="0 0 50 50" role="presentation"
                   aria-hidden="true">
                <path id="aFill" className="st0" d="M39.3,22.2c-7.8-4.6-20.7-5.1-28.2-2.8c-1.2,0.4-2.5-0.3-2.8-1.5c-0.4-1.2,0.3-2.5,1.5-2.8
	c8.6-2.6,22.8-2.1,31.8,3.2c1.1,0.6,1.4,2,0.8,3.1C41.8,22.5,40.4,22.9,39.3,22.2z M39.1,29.1c-0.5,0.9-1.7,1.2-2.6,0.6
	c-6.5-4-16.4-5.2-24.2-2.8c-1,0.3-2.1-0.3-2.4-1.3c-0.3-1,0.3-2.1,1.3-2.4c8.8-2.7,19.7-1.4,27.2,3.2C39.3,27.1,39.6,28.2,39.1,29.1
	z M36.1,35.7c-0.4,0.7-1.4,0.9-2.1,0.5c-5.7-3.5-12.9-4.3-21.3-2.3c-0.8,0.2-1.6-0.3-1.8-1.1c-0.2-0.8,0.3-1.6,1.1-1.8
	c9.2-2.1,17.2-1.2,23.5,2.7C36.3,34.1,36.6,35,36.1,35.7z M25,0.8C11.6,0.8,0.8,11.6,0.8,25c0,13.4,10.9,24.2,24.2,24.2
	c13.4,0,24.2-10.9,24.2-24.2C49.2,11.6,38.4,0.8,25,0.8z"/>
              </svg>
              <span className={classes.aLinkText}>listen now</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
