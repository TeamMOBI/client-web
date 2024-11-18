import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const bubbleRecipe = recipe({
  base: {
    width: "max-content",
    padding: "0.75rem 1.25rem",

    borderRadius: "0.5rem",

    display: "flex",
    gap: 8,
    flexShrink: 0,
  },
  variants: {
    state: {
      first: {
        background: vars.color.green_20,
        color: vars.color.green,
      },
      second: {
        background: vars.color.yellow_20,
        color: vars.color.yellow,
      },
      third: {
        background: vars.color.orange_20,
        color: vars.color.orange,
      },
      forth: {
        background: vars.color.red_20,
        color: vars.color.red,
      },
    },
  },
  defaultVariants: {
    state: "first",
  },
});

export const textContainer = style({
  color: vars.color.gray_01,
});

export type BubbleVariants = RecipeVariants<typeof bubbleRecipe>;
