import { useRouter } from "next/router";
const DynamicPage = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;

  const { title } = data;
  console.log("where", data);
  return (
    <div className={classes.oNewsArticle}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oNewsArticle} col`}>
            <h1 className={`${classes.aBlockTitle} fnt30`}>{slug}</h1>
            <h1 className={`${classes.aBlockTitle} fnt30`}>{title}</h1>
          </div>
        </div>
      </div>
      <div className={classes.oChatBanner}>
        <ChatBanner />
      </div>

      <MoreArticles />

      <Subfooter />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://shiny-dev-cms.ayoba.me/api/slugs`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default DynamicPage;
