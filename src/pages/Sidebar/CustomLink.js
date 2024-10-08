import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomeLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          color: !match ? "var(--twitter-color)" : "blue",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomeLink;
