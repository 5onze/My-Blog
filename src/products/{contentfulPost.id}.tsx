import React from "react";

interface productProps {
  pageContext: any;
}

export default function Product({ pageContext }: productProps) {
  const { product } = pageContext;
  console.log(product.preview, product.content);
  return (
    <div>
      <ul>
        <li>Name:{product.title}</li>
        <li>Price:{product.price}</li>
        <li>Slug:{product.slug}</li>
        <li>Preview:{product.preview}</li>
        <li>content:{product.content}</li>
      </ul>
    </div>
  );
}
