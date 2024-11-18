import { typos } from "@/styles/typos.css";
import { tabStyle } from "./Tab.css";
import { RightArrow } from "@/icons/RightArrow";
import Link from "next/link";
import { vars } from "@/styles/theme.css";

export type TabProps = {
  href: string;
  selected: boolean;
  text: string;
};

export const Tab = (props: TabProps) => {
  return (
    <Link href={props.href} className={tabStyle}>
      <span
        className={typos.label2}
        style={{
          color: props.selected ? vars.color.yellow : vars.color.white,
        }}
      >
        {props.text}
      </span>
      <RightArrow
        color={props.selected ? vars.color.yellow : vars.color.white}
      />
    </Link>
  );
};
