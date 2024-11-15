"use client";

import React from "react";

export const useDimensions = (ref: any) => {
  const dimensions = React.useRef({ width: 0, height: 0 });

  React.useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
