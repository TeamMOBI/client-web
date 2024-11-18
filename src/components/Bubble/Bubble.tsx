import { bubbleRecipe, textContainer, BubbleVariants } from "./Bubble.css";
import { typos } from "@/styles/typos.css";

export type BubbleProps = BubbleVariants & {
  time: string;
  text: string;
};

export const Bubble = (props: BubbleProps) => {
  return (
    <div
      className={`${bubbleRecipe({
        state: props.state,
      })} ${typos.body}`}
    >
      <span>{props.time} 방문자</span>
      <span>•</span>
      <span className={textContainer}>{props.text}</span>
    </div>
  );
};
