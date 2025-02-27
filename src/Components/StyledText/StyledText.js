import React from "react";
import styles from "./StyledText.module.scss";

function StyledText({ unstyledText }) {
  const regex = /(\*.*?\*|__.*?__)/g;
  const splitText = unstyledText.split(regex);

  return (
    <>
      {splitText.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return <i key={index}>{part.slice(1, -1)}</i>;
        } else if (part.startsWith("__") && part.endsWith("__")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
}

export default StyledText;
