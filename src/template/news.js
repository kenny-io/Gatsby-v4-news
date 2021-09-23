import * as React from "react";
import { graphql, Link } from "gatsby";
import { container } from "./news.module.css";

export default function BlogPostTemplate({ data, pageContext }) {
  const news = data.markdownRemark;
  return (
    <>
      <article
        className={container}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{news.frontmatter.title}</h1>
          <p>{news.frontmatter.date}</p>
        </header>
        <Link to={`/blog/${pageContext.id}`}>SSG version</Link>

        <section
          dangerouslySetInnerHTML={{ __html: news.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    # Get a specific news item
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        id
        slug
      }
    }
  }
`;
