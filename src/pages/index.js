import * as React from "react";
import Footer from "../components/Footer";

import { Link } from "gatsby";

const buttonStyle = {
  height: "400px",
  width: "400px",
  backgroundColor: "teal",
  borderRadius: "50%",
  display: "inline-block",
  textDecoration: "none",
  cursor: "pointer",
  color: "white",
};

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "10rem",
};

// markup
const IndexPage = () => {
  return (
    <div>
      <title>Breaking News 🚀</title>

      <main style={container}>
        <Link to={`/news`}>
          <button type="button" style={buttonStyle}>
            <a>
              <h2>Read Our News 🚀</h2>
            </a>
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
