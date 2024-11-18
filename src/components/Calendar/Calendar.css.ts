import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  minWidth: 597,
  padding: "2rem",

  borderRadius: "1rem",
  background: vars.color.gray_06,

  display: "flex",
  flexDirection: "column",
  gap: 32,
});
