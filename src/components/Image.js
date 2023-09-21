import React, { forwardRef } from "react";

export const Image = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: 400,
      gridRowStart: "span 2",
      gridColumnStart: "span 2",
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
