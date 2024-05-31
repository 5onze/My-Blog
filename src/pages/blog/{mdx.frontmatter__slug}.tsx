import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: BlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title={data.mdx?.frontmatter?.title as string}>
      <p>{data.mdx?.frontmatter?.date}</p>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      {children}
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        category
        date(formatString: "YYYY MM DD")
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
