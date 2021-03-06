import React from "react";

const SearchableIcon = ({ icon, text, background, titleText }) => (
  <div
    style={{
      width: 30,
      height: 30,
      position: "relative",
      display: "inline-block",
      background: background || "transparent"
    }}
  >
    <span
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        fontSize: 10,
        color: "transparent",
        pointerEvents: "none"
      }}
    >
      {text}
    </span>
    <img
      src={"https://www.bungie.net/" + icon}
      alt={text}
      title={titleText || text}
      width={30}
      height={30}
      className="icon"
    />
  </div>
);

export default SearchableIcon;
