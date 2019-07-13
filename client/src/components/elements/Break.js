import React from "react";

export default function Break(props) {
  const renderBreaks = () => {
    const rows = [];
    for (let i = 0; i < props.times; i++) {
      rows.push(<br key={i.toString()} />);
    }
    return rows;
  };

  return <div>{renderBreaks()}</div>;
}
