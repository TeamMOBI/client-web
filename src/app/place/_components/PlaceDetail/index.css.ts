import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const imageContainer = style({
  width: "100%",
  height: 400,

  borderRadius: "1rem",
  background: vars.color.gray_05,

  position: "relative",
  overflow: "hidden",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

export const twoColumnContainer = style({
  width: "100%",
  display: "flex",
  gap: 32,
});
