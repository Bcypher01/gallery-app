import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 3fr)`,
        gridGap: 10,
        padding: 20,
      }}>
      {children}
    </div>
  );
}
