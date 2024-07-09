import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

export default function IndexPage({ data }: PageProps<Queries.PostsQuery>) {
  return (
    <Layout title="Welcome my stie!">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {data.allContentfulPost.nodes.map((post) => (
        <article>
          <GatsbyImage
            image={getImage(post.preview?.gatsbyImageData!)!}
            alt={post.title!}
          />
          <Link to={`/products/${post.id}`}>
            <h2>{post.title}</h2>
            <h4>{post.price}원</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Posts {
    allContentfulPost {
      nodes {
        id
        title
        slug
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
