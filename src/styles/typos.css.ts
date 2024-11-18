import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const typos = {
  title: style({
    fontFamily: vars.fonts.title.fontFamily,
    fontWeight: vars.fonts.title.fontWeight,
    fontSize: vars.fonts.title.fontSize,
    lineHeight: vars.fonts.title.lineHeight,
    letterSpacing: vars.fonts.title.letterSpacing,
  }),
  subtitle: style({
    fontFamily: vars.fonts.subtitle.fontFamily,
    fontWeight: vars.fonts.subtitle.fontWeight,
    fontSize: vars.fonts.subtitle.fontSize,
    lineHeight: vars.fonts.subtitle.lineHeight,
    letterSpacing: vars.fonts.subtitle.letterSpacing,
  }),
  subtitle2: style({
    fontFamily: vars.fonts.subtitle2.fontFamily,
    fontWeight: vars.fonts.subtitle2.fontWeight,
    fontSize: vars.fonts.subtitle2.fontSize,
    lineHeight: vars.fonts.subtitle2.lineHeight,
    letterSpacing: vars.fonts.subtitle2.letterSpacing,
  }),
  body: style({
    fontFamily: vars.fonts.body.fontFamily,
    fontWeight: vars.fonts.body.fontWeight,
    fontSize: vars.fonts.body.fontSize,
    lineHeight: vars.fonts.body.lineHeight,
    letterSpacing: vars.fonts.body.letterSpacing,
  }),
  detail: style({
    fontFamily: vars.fonts.detail.fontFamily,
    fontWeight: vars.fonts.detail.fontWeight,
    fontSize: vars.fonts.detail.fontSize,
    lineHeight: vars.fonts.detail.lineHeight,
    letterSpacing: vars.fonts.detail.letterSpacing,
  }),
  label1: style({
    fontFamily: vars.fonts.label1.fontFamily,
    fontWeight: vars.fonts.label1.fontWeight,
    fontSize: vars.fonts.label1.fontSize,
    lineHeight: vars.fonts.label1.lineHeight,
    letterSpacing: vars.fonts.label1.letterSpacing,
  }),
  label2: style({
    fontFamily: vars.fonts.label2.fontFamily,
    fontWeight: vars.fonts.label2.fontWeight,
    fontSize: vars.fonts.label2.fontSize,
    lineHeight: vars.fonts.label2.lineHeight,
    letterSpacing: vars.fonts.label2.letterSpacing,
  }),
  label3: style({
    fontFamily: vars.fonts.label3.fontFamily,
    fontWeight: vars.fonts.label3.fontWeight,
    fontSize: vars.fonts.label3.fontSize,
    lineHeight: vars.fonts.label3.lineHeight,
    letterSpacing: vars.fonts.label3.letterSpacing,
  }),
};
