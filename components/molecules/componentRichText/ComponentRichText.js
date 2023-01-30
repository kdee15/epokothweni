import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentRichText.module.scss";

function ComponentRichText({ contentModule }) {
  return (
    <div className={`${classes.mBody} container`}>
      <div className={`${classes.mRow} row`}>
        <div className={`${classes.mText} col-12 offset-md-1 col-md-10`}>
          {documentToReactComponents(contentModule)}
        </div>
      </div>
    </div>
  );
}

export default ComponentRichText;
