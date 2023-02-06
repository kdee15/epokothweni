import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentCopy.module.scss";

function ComponentCopy({ contentModule }) {
  const { title, copy, blockWidth, textAlignment, maxWidth } = contentModule;
  const { linkAnchor } = contentModule.blockTheme.fields;

  return (
    <section className={`${classes.oCopyBlock}`}>
      {linkAnchor ? (
        <div className={`aBlockAnchor`} id={linkAnchor}></div>
      ) : null}

      <div className={`${classes.mWrapper}`}>
        <h2 className={classes.aBlockTitle}>{title}</h2>
        <div
          className={classes.oBlockBody}
          style={{
            width: `${blockWidth}`,
            textAlign: `${textAlignment}`,
            maxWidth: `${maxWidth}`,
          }}
        >
          {documentToReactComponents(copy)}
        </div>
      </div>
    </section>
  );
}

export default ComponentCopy;
