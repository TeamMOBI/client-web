import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const background = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: vars.color.black_20,
  backdropFilter: "blur(5px)",

  zIndex: 2,
});

export const container = style({
  width: 600,
  padding: "1.5rem",

  borderRadius: "1rem",
  background: vars.color.black,
  borderWidth: 1,
  borderColor: vars.color.gray_04,

  display: "flex",
  flexDirection: "column",
  gap: 52,
});

export const topContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",

  gap: 36,
});

export const titleContainer = style({
  width: "100%",

  textAlign: "center",

  color: vars.color.gray_01,
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});
