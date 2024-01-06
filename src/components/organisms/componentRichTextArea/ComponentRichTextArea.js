import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentRichTextArea.module.scss";

const { C_RICHTEXT_RENDERER } = require("../../../helpers/richtext");

function ComponentRichTextArea({ contentModule }) {
  return (
    <div className={classes.oRichText}>
      {contentModule
        ? documentToReactComponents(
            contentModule.json,
            C_RICHTEXT_RENDERER(contentModule.links)
          )
        : null}
    </div>
  );
}

export default ComponentRichTextArea;
