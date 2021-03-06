import React from "react";
import "./Footer.scss";

const Loader: React.FC<{ count: number }> = ({ count }) => {
  return <span className="footer">Characters: {count}</span>;
};

export default Loader;
