import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <Layout title="About">
      <p>Hi</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
