import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome my stie!">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
