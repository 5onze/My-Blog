import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: BlogPostProps) {
  return (
    <Layout title={data.mdx?.frontmatter?.title as string}>{children}</Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        category
        date
        slug
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
