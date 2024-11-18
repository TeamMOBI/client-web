import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const tabStyle = style({
  width: "100%",

  padding: "1.5rem",

  background: vars.color.gray_06,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,

  cursor: "pointer",
});
