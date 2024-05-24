import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
