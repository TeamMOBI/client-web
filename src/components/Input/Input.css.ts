import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  height: 48,

  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const input = style({
  width: "100%",
  height: "100%",

  background: vars.color.gray_06,
  color: vars.color.gray_01,
});

export const labelContainer = style({
  color: vars.color.gray_01,
});

export const inputBoxRecipe = recipe({
  base: {
    width: "100%",
    height: 48,
    padding: "0.75rem 1rem",

    gap: 10,

    display: "flex",
    alignItems: "center",

    borderRadius: "0.75rem",
    background: vars.color.gray_06,
    color: vars.color.gray_04,
  },
  variants: {
    state: {
      default: {},
      active: {
        border: `2px solid ${vars.color.yellow}`,
      },
      disabled: {},
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export type InputVariants = RecipeVariants<typeof inputBoxRecipe>;
