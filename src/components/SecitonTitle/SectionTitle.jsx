import React from "react";

const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center mb-10 max-w-lg mx-auto">
      <h3 className="text-xl text-yellow-500 italic">{subTitle}</h3>
      <div className="divider"></div>
      <h1 className="text-4xl">{title}</h1>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
