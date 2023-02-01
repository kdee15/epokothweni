import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import classes from "../components/organisms/componentRichTextArea/ComponentRichTextArea.module.scss";

const C_RICHTEXT_RENDERER = function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <span style={{ fontWeight: "bold" }}>{text}</span>
      ),
    },

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query

        if (entry.__typename === "ComponentVideoPlayer") {
          return (
            <div className={classes.oVideo}>
              <h4 className={`${classes.aTitle}`}>{entry.title}</h4>
              <div className={classes.mVideo}>
                <iframe
                  className={classes.iFrame}
                  src={entry.videoUrl}
                  height="100%"
                  width="100%"
                  title={entry.title}
                  allowFullScreen={true}
                  frameBorder="0"
                />
              </div>
            </div>
          );
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" />;
      },
    },
  };
};

module.exports = {
  C_RICHTEXT_RENDERER,
};
