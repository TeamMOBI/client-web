import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const buttonRecipe = recipe({
  base: {
    height: 48,
    borderRadius: "0.5rem",

    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  variants: {
    state: {
      default: {
        background: vars.color.gray_01,
        color: vars.color.gray_06,
      },
      active: {
        background: vars.color.yellow,
        color: vars.color.gray_06,
      },
      disabled: {
        background: vars.color.gray_04,
        color: vars.color.gray_03,
      },
    },
    size: {
      small: { padding: "1rem 1rem" },
      medium: { padding: "1rem 1.5rem" },
    },
  },
  defaultVariants: {
    state: "default",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
