import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome my stie!">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        height={600}
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Clifford.jpg"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
