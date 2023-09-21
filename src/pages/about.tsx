import { Layout } from "@/components/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
