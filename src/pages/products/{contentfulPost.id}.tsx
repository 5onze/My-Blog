import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function Product({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulPost?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulPost?.title!}>
      <GatsbyImage image={image!} alt={data.contentfulPost?.title!} />
      <h2>{data.contentfulPost?.price}원</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String!) {
    contentfulPost(id: { eq: $id }) {
      price
      title
      preview {
        gatsbyImageData(placeholder: BLURRED, height: 450)
      }
    }
  }
`;
