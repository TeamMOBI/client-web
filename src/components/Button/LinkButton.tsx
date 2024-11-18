import { CSSProperties } from "@vanilla-extract/css";
import { buttonRecipe, ButtonVariants } from "./Button.css";
import { typos } from "@/styles/typos.css";
import Link from "next/link";

export type LinkButtonProps = ButtonVariants & {
  text: string;
  href: string;
  style?: CSSProperties;
};

export const LinkButton = (props: LinkButtonProps) => {
  const { state, size, text, href, style } = props;
  return (
    <Link
      href={href}
      className={`${buttonRecipe({ state, size })} ${typos.label2} ${style}`}
    >
      {text}
    </Link>
  );
};
