import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => (
  <div className="mb-8 text-xl tracking-wider text-highlight medium-font">
    <div>{text}</div>
    <div className="w-40 border-b-2 border-highlight"></div>
  </div>
);

export default SectionTitle;
