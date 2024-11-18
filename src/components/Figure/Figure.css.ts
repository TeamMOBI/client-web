import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const figureRecipe = recipe({
  base: {
    padding: "0.9rem 1.25rem",
    borderRadius: "0.75rem",

    flexShrink: 0,
  },
  variants: {
    state: {
      여유: {
        background: vars.color.green_20,
        color: vars.color.green,
      },
      보통: {
        background: vars.color.yellow_20,
        color: vars.color.yellow,
      },
      "약간 붐빔": {
        background: vars.color.orange_20,
        color: vars.color.orange,
      },
      붐빔: {
        background: vars.color.red_20,
        color: vars.color.red,
      },
    },
  },
  defaultVariants: {
    state: "여유",
  },
});

export type FigureVariants = RecipeVariants<typeof figureRecipe>;
