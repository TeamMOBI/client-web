import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  height: 90,

  padding: "0 18rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  background: vars.color.black,
  borderBottom: `1px solid ${vars.color.gray_06}`,

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: 1,
});

export const form = style({
  minWidth: "40%",
  display: "flex",
  gap: "1.5rem",
});
