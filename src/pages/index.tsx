import { Layout } from "@/components/Layout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
