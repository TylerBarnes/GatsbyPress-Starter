import React from "react";
import { graphql } from "gatsby";
import Parser from "html-react-parser";

export default function home(props) {
  const {
    wordpressWpCollections: { post_title, post_content }
  } = props.data;

  return (
    <>
      <h2>Default template</h2>
      {!!post_title && <h1>{post_title}</h1>}
      {!!post_content && Parser(post_content)}
    </>
  );
}

export const CollectionQuery = graphql`
  query DefaultTemplate($id: Int!) {
    wordpressWpCollections(wordpress_id: { eq: $id }) {
      post_title
      post_content
    }
  }
`;
