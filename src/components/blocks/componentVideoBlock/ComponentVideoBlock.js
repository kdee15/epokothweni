import classes from "./ComponentVideoBlock.module.scss";

function ComponentVideoBlock({ contentModule }) {
  const { title, videoUrl } = contentModule;
  return (
    <section className={`${classes.oVideoBlock}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={classes.aBlockTitle}>{title}</h2>
          <div
            className={`${classes.oVideo} oBlockBody col-12 col-md-6 offset-md-3`}
          >
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
        </div>
      </div>
    </section>
  );
}

export default ComponentVideoBlock;
