import React from "react"
import { Link } from "gatsby"
import "../styles/writeups-styles.css"

const PostLink = ({ post }) => (
  <div className="post-link">
    <Link to={post.frontmatter.slug} style={{ height: 30 }}>
      <h3>{post.frontmatter.title} ({post.frontmatter.date}) - {post.frontmatter.author}</h3>
    </Link>
    <h4>{post.frontmatter.description}</h4>
  </div>
)

export default PostLink
