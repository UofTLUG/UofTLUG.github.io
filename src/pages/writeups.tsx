import React from 'react';
import { graphql } from "gatsby"
import Header from '../components/header';
import PostLink from "../components/post-link"
import '../styles/writeups-styles.css';

const WriteUps = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <main>
      <Header />
      <div className="container">
        {Posts}
      </div>
    </main>
  );
};


export default WriteUps;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            author
            description
            slug
            title
          }
        }
      }
    }
  }`
