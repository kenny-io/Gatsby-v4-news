import * as React from "react";
import { footer, logo } from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={footer}>
        Made with
        <img
          src="https://res.cloudinary.com/sealuse-creatives/image/upload/c_scale,w_100/v1558226998/wonderlane-1413325-unsplash.jpg"
          alt="Netlify Logo"
          className={logo}
        />
        for you
      </footer>
    </>
  );
}
