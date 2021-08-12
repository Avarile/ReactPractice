import "./footer.styles.scss";
import React from "react";

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return <div className="footer ">{year} copyright NOMAD Store</div>;
}
