import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  padding: "10rem 18rem",
});

export const cardContainer = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  alignItems: "center",
  gap: 20,
});
