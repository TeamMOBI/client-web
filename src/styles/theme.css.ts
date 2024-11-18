import { createTheme, globalStyle } from "@vanilla-extract/css";
import { colors } from "./colors";

export const [themeClass, vars] = createTheme({
  color: colors,
  fonts: {
    title: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.875rem",
      fontWeight: "500",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    subtitle: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.35rem",
      fontWeight: "500",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    subtitle2: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "500",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    body: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    detail: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "140%",
      letterSpacing: "-0.32px",
    },
    label1: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.1rem",
      fontWeight: "400",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    label2: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "110%",
      letterSpacing: "-0.4px",
    },
    label3: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "0.8rem",
      fontWeight: "400",
      lineHeight: "110%",
      letterSpacing: "-0.4px",
    },
  },
});

globalStyle(":root", {
  fontFamily:
    "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
});

globalStyle("body", {
  background: vars.color.black,
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("button", {
  background: "inherit",
  border: "none",
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  outline: "none",
});

globalStyle("a:visited", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("input", {
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
});

globalStyle("input:focus", {
  outline: "none",
});
