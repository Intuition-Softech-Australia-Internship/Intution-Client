import React from "react";
import { Props } from "./type";
export const Layout = ({ children, bgColor }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        backgroundColor: bgColor,
      }}
    >
      <div style={{ width: "65%", marginTop: "8%" }}>{children}</div>
    </div>
  );
};
