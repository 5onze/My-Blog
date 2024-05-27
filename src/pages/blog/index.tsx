import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <Layout title="Blog">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              {node.frontmatter?.title}
            </Link>
          </h2>
          <p>
            Posted: {node.frontmatter?.date} | {node.frontmatter?.category}
          </p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allMdx {
      nodes {
        frontmatter {
          slug
          date(formatString: "YYYY-MM-DD")
          title
          category
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
