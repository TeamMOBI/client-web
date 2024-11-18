import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  height: "100vh",

  padding: "10rem 18rem",

  display: "flex",
  gap: "6rem",
});

export const cardContainer = style({
  width: "100%",
  height: "80vh",

  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: "1.5rem",

  overflowY: "scroll",
  scrollbarWidth: "none",
});
