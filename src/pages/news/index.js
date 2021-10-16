import * as React from "react";
import Footer from "../../components/Footer";
import { graphql, Link } from "gatsby";
import {
  card,
  Homecontainer,
  container,
  number,
  breaking,
  archive,
} from "../news/news.module.css";

// markup
export default function IndexPage({ data }) {
  return (
    <div className={Homecontainer}>
      <main>
        <h1>All News Headlines</h1>
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <div key={index} className={card}>
            <div className={container}>
              <Link to={`/news/${node.frontmatter.id}`}>
                <h4>
                  <span className={number}>{node.frontmatter.id}.</span>
                  <b>{node.frontmatter.title}</b>
                </h4>
              </Link>
              <p>{node.frontmatter.excerpt}</p>
              <p
                className={`${
                  node.frontmatter.tag === "breaking" ? breaking : archive
                }`}
              >
                {node.frontmatter.tag}
              </p>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          excerpt
          tag
          id
        }
      }
    }
  }
`;
