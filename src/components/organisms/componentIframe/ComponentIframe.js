import classes from "./ComponentIframe.module.scss";

function ComponentIframe({ contentModule }) {
  const { title, videoUrl } = contentModule;
  return (
    <section className={`${classes.oFrame}`}>
      <h2 className={classes.aBlockTitle}>{title}</h2>
      <div className={`${classes.oFrameContent}`}>
        <div className={classes.blockWrapper}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            className={classes.mVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ComponentIframe;
