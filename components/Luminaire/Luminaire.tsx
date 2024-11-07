import React from "react";

interface luminaireProps {
  className?: string;
}

const Luminaire = ({ className }: luminaireProps) => {
  return (
    <div
      className={`luminaire ${className}`}
      style={{ position: "relative" }}
    ></div>
  );
};

export default Luminaire;
